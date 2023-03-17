import React,{MouseEvent} from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/app-footer";
import CurrentPageNotch from "../components/app-current-page-notch";
import Question from "../components/question";
import Answer from "../components/answer";
import QuestionLengthTracker from "../components/question-legth-tracker";
import Button from "../components/button";

const Game = (): JSX.Element => {
  const { category } = useParams();

  const handleButtonClick = (): void => {
    console.log("You clicked me");
  };
  const handleAnswerClick = (event: MouseEvent<HTMLDivElement>) => {
       console.log(event.currentTarget.textContent);
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
        <section className="game-area d-flex jusify-content-center flex-column my-2     ">
          <QuestionLengthTracker currentQuestion={1} totalQuestionLength={25} />
          <Question question="do you love me ? " />
          <section className="container d-flex align-items-center justify-content-center">
            <section className="answer-area row">
              <Answer text="false" onClick={(event:MouseEvent<HTMLDivElement>)=>handleAnswerClick(event)} />
              <Answer text="true"  onClick={(event:MouseEvent<HTMLDivElement>)=>handleAnswerClick(event)}/>
              <Answer text="no"  onClick={(event:MouseEvent<HTMLDivElement>)=>handleAnswerClick(event)}/>
              <Answer text="yes"  onClick={(event:MouseEvent<HTMLDivElement>)=>handleAnswerClick(event)}/>
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

        <Footer categoryPage={<CurrentPageNotch />} />
      </section>
    </React.Fragment>
  );
};

export default Game;
