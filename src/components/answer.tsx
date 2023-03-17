import React from 'react'

interface answerProps
{
    answer:string,
    
}
const Answer = ({answer}: answerProps):JSX.Element =>{
    return (
        <React.Fragment>
        
            <section className="answer-container">
                <section className="answer-container-inner-section">
                    
                    {answer}
                    
                </section>
            </section>
                
        </React.Fragment>
    )
}

export default Answer;