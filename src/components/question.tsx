import React from "react";

interface questionProps {
  question: string;
}

const Question = ({ question }: questionProps): JSX.Element => {
  return (
    <React.Fragment>
      <section className="question-container d-flex align-items-center justify-content-center my-3">
        <h5 className="fw-bold fs-5 text-center text-capitalize p-2">{question}</h5>
      </section>
    </React.Fragment>
  );
};


export default Question;