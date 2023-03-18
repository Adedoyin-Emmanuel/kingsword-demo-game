import React, { MouseEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Question from "../components/question";
import Answer from "../components/answer";
import QuestionLengthTracker from "../components/question-legth-tracker";
import Button from "../components/button";
import $ from "jquery";
import db from "../backend/db";
import Confetti from "react-confetti";
/*question interface*/

interface Questions {
  id: number;
  question: string;
  category: string;
  options: string[];
  correctAnswer: number;
}

/*Quiz data*/
interface QuizData {
  questions: Questions[];
}

interface AjaxResponse {
  data: any;
  status: number;
  message: string;
}

const Game = (): JSX.Element => {
  const { category } = useParams();
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [dataToUser, setDataToUser] = useState();
  const [buttonClick, setButtonClick] = useState<boolean>(false);
  const [answerSelected, setAnswerSelected] = useState<boolean>(false);
  const [legitAnswer, setLegitAnswer] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("next question");
  const navigateTo = useNavigate();

  const [currentAnswerSelected, setCurrentAnswerSelected] =
    useState<string>(" ");

  // useEffect hook to trigger confetti when showConfetti is true
  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);

        navigateTo(`/app/result/${category}`);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  useEffect(() => {
    const fetchData = () => {
      return $.ajax({
        url: "/questions/quizData.json",
      });
    };

    const getData = async () => {
      const response = await fetchData();
      const returnedData = response.questions;
      db.create("KINGSWORD_GAME_TOTAL_QUESTIONS", returnedData.length);
      db.create("KINGSWORD_GAME_SCORE", "0");
      setDataToUser(
        returnedData.map((data: Questions, dataIndex: number) => {
          return data;
        })
      );
    };

    getData();
  }, [buttonClick]);

  const [counter, setCounter] = useState<number>(0);

  var questions;

  if (dataToUser) {
    questions = dataToUser[counter];
  }

  const handleButtonClick = (): void => {
    //remove the active button class
    $(".answer-container-inner-section").removeClass(
      "answer-container-inner-section-active"
    );
    //check if the user selects a valid answer
    if (currentAnswerSelected == " ") {
      Swal.fire({
        toast: true,
        text: "Select an option ",
        icon: "error",
        position: "top",
        timer: 3000,
        showConfirmButton: false,
      }).then((willProceed: any) => {
        return;
      });
    } else {
      for (let i = 0; i < questions.options.length; i++) {
        if (
          currentAnswerSelected ==
          questions.options[questions.correctAnswer].toLowerCase().trim()
        ) {
          db.update("KINGSWORD_GAME_SCORE", `${legitAnswer + 1}`);
          setLegitAnswer(() => legitAnswer + 1);
          setCurrentAnswerSelected(" ");
          break;
        } else {
          setCurrentAnswerSelected(" ");
          break;
        }
      }

      //check if that's game end
      if (counter + 1 == parseInt(db.get("KINGSWORD_GAME_TOTAL_QUESTIONS"))) {
        setShowConfetti(true);
        // db.create("KINGSWORD_GAME_LEGIT_SCORE",)
      } else {
        setButtonClick(true);
        setCounter(counter + 1);
      }
    }
  };

  useEffect(() => {
    //check if the user is on the last question

    if (counter + 1 == parseInt(db.get("KINGSWORD_GAME_TOTAL_QUESTIONS"))) {
      setButtonText("Last Question");
    }
  }, [counter]);

  const handleAnswerClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnswerSelected(true);
    setCurrentAnswerSelected(
      event.currentTarget.textContent.toLowerCase().trim()
    );

    //remove the class from any previous element that was clicked || selected
    $(".answer-container-inner-section").removeClass(
      "answer-container-inner-section-active"
    );
    $(event.currentTarget).addClass("answer-container-inner-section-active");
  };

  return (
    <React.Fragment>
      <section className="container-fluid p-0" style={{ overflowX: "hidden" }}>
        {showConfetti && <Confetti />}
        <h5 className="fs-5 fw-bold my-3 p-2 text-capitalize">
          {" "}
          <p
            style={{ color: "var(--brand-category-love-color)" }}
            className="m-0 d-inline"
          >
            {category}
          </p>{" "}
          category
        </h5>
        <br />

        <section className="game-area d-flex jusify-content-center flex-column my-2 ">
          <QuestionLengthTracker
            currentQuestion={counter + 1}
            totalQuestionLength={parseInt(
              db.get("KINGSWORD_GAME_TOTAL_QUESTIONS")
            )}
          />
          <Question question={questions && questions.question} />
          <section className="container d-flex align-items-center justify-content-center">
            <section className="answer-area row">
              <Answer
                text={questions && questions.options[0]}
                onClick={(event: MouseEvent<HTMLDivElement>) =>
                  handleAnswerClick(event)
                }
              />
              <Answer
                text={questions && questions.options[1]}
                onClick={(event: MouseEvent<HTMLDivElement>) =>
                  handleAnswerClick(event)
                }
              />
              <Answer
                text={questions && questions.options[2]}
                onClick={(event: MouseEvent<HTMLDivElement>) =>
                  handleAnswerClick(event)
                }
              />
              <Answer
                text={questions && questions.options[3]}
                onClick={(event: MouseEvent<HTMLDivElement>) =>
                  handleAnswerClick(event)
                }
              />
            </section>
          </section>

          <section className="button-container d-flex align-items-center justify-content-center ">
            <Button
              text={buttonText}
              className="brand-button width-toggle-4 fw-bold my-md-4 my-3 game-btn"
              onClick={handleButtonClick}
            />
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Game;
