import React, { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Question from "../components/question";
import Answer from "../components/answer";
import QuestionLengthTracker from "../components/question-legth-tracker";
import Button from "../components/button";
import $ from "jquery";
import db from "../backend/db";

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
  const [currentAnswerSelected, setCurrentAnswerSelected] =
    useState<string>(" ");
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

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

      setDataToUser(
        returnedData.map((data: Questions, dataIndex: number) => {
          return data;
        })
      );
    };

    getData();
  }, [buttonClick]);

  //define come variables for the overall game
  // const [playingGame, setPlayingGame] = useState<boolean>(false);
  // const [questions, setQuestions] = useState<Questions | null>(null);
  // const [currentQuestion, setCurrentQuestion] = useState<Questions | null>(null);
  // const [correctAnswer, setCorrectAnswer] = useState<number | null>(null);
  // const [totalQuestions, setTotalQuestions] = useState<number | null>(null);
  // const [totalAnswers, setTotalAnswers] = useState<number | null>(null);
  // const [questionLength, setQuestionLength] = useState<number | null>(null);

  let questionIncrement = 0;
  const [counter, setCounter] = useState<number>(0);
  var questions;

  if (dataToUser) {
    questions = dataToUser[counter];
  }

  const handleButtonClick = (): void => {
    //check if answer matches
    console.log(currentAnswerSelected);

    //
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
      setButtonClick(true);
      setCounter(counter + 1);

      for (let i = 0; i < questions.options.length; i++) {
        if (questions.options[i] == currentAnswerSelected) {
          setCorrectAnswer(correctAnswer + 1);
        }
      }
    }
  };
  const handleAnswerClick = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event.currentTarget.textContent);
    setAnswerSelected(true);
    setCurrentAnswerSelected(event.currentTarget.textContent);
  };

  return (
    <React.Fragment>
      <section className="container-fluid p-0">
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
              text="next question"
              className="brand-button width-toggle-4 fw-bold my-md-4 my-3"
              onClick={handleButtonClick}
            />
          </section>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Game;
