import React from 'react'

interface answerProps
{
    text:string,
    
}
const Answer = ({text}: answerProps):JSX.Element =>{
    return (
        <React.Fragment>
        
            <section className="answer-container">
                <section className="answer-container-inner-section">
                    
                   <p className="answer-text">{text}</p>
                    
                </section>
            </section>
                
        </React.Fragment>
    )
}

export default Answer;