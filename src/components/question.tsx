import React from "react";

interface questionProps {
  question: string;
}

const Question = ({ question }: questionProps): JSX.Element => {
  return (
    <React.Fragment>
      <section className="question-container d-flex align-items-center justify-content-center my-3">
        <h4 className="fw-bold fs-4 text-center text-capitalize">{question}</h4>
      </section>
    </React.Fragment>
  );
};


export default Question;