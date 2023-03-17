import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/app-footer";
import CurrentPageNotch from "../components/app-current-page-notch";
import Question from "../components/question";
import Answer from "../components/answer";
import QuestionLengthTracker from "../components/question-legth-tracker";
import Button from "../components/button";

const Game = (): JSX.Element => {
  const { category } = useParams();
  
  const handleButtonClick = ():void =>{
    console.log("You clicked me");
  }

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
        <br/>
        <section className="game-area d-flex jusify-content-center flex-column my-2     ">
          <QuestionLengthTracker currentQuestion={1} totalQuestionLength={25} />
          <Question question="do you love me ? " />
          <section className="answer-area d-flex align-items-around justify-content-center flex-wrap p-4">
            <Answer text="false" />
            <Answer text="true" />
            <Answer text="no" />
            <Answer text="yes" />
          </section>
          
          <section className="button-container d-flex align-items-center justify-content-center">
            <Button text="next question" className="brand-button" onClick={handleButtonClick}/>
          </section>
        </section>

        <Footer categoryPage={<CurrentPageNotch />} />
      </section>
    </React.Fragment>
  );
};

export default Game;
