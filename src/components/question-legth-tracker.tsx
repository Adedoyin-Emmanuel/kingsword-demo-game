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
           <p className="text-captalize text-center text-muted">question {currentQuestion} out of {totalQuestionLength}</p>      
        </React.Fragment>
    )
}


export default QuestionLengthTracker;