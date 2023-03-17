import React from 'react'

interface questionLengthTrakcerProps
{
    currentQuestion: number;
    totalQuestionLength:number;
}

const QuestionLengthTracker = ({currentQuestion, totalQuestionLength}: questionLengthTrakcerProps):JSX.Element =>
{
    return (
        <React.Fragment>
           <p className="text-capitalize text-center text-muted">question {currentQuestion} of {totalQuestionLength}</p>      
        </React.Fragment>
    )
}


export default QuestionLengthTracker;