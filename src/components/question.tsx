import React from "react";

interface questionProps {
  question: string;
}

const Question = ({ question }: questionProps): JSX.Element => {
  return (
    <React.Fragment>
      <section className="question-container d-flex align-items-center justify-content-center my-3">
        <h2 className="fw-bold fs-2 text-center text-capitalize">{question}</h2>
      </section>
    </React.Fragment>
  );
};


export default Question;