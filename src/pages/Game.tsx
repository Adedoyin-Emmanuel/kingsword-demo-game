import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/app-footer";
import CurrentPageNotch from "../components/app-current-page-notch";
import Question from "../components/question";
import Answer from "../components/answer";
import QuestionLengthTracker from "../components/question-legth-tracker";
const Game = (): JSX.Element => {
  const { category } = useParams();

  return (
    <React.Fragment>
      <section className="container-fluid p-0">
        <h5 className="fs-5 fw-bold my-3 p-2 text-capitalize">
          {" "}
          <p style={{"color":"var(--brand-category-love-color)"}} className="m-0 d-inline">{category}</p> category
        </h5>
        <section className="game-area d-flex jusify-content-center flex-column my-">
          <Question question="do you love me ? " />
          <section className="answer-area d-flex align-items-around justify-content-center flex-wrap p-4">
            <Answer text="false" />
            <Answer text="true" />
            <Answer text="no" />
            <Answer text="yes" />
          </section>
        </section>

        <Footer categoryPage={<CurrentPageNotch />} />
      </section>
    </React.Fragment>
  );
};

export default Game;
