import React from 'react'

interface answerProps
{
    text:string,
    
}
const Answer = ({text}: answerProps):JSX.Element =>{
    return (
        <React.Fragment>
        
            <section className="answer-container d-flex align-items-center justify-content-center shadow mx-4 my-3">
                <section className="answer-container-inner-section d-flex align-items-center justify-content-center shadow">
                    
                   <h6 className="answer-text fw-bold fs-6 text-capitalize m-0" id={text}>{text}</h6>
                    
                </section>
            </section>
                
        </React.Fragment>
    )
}

export default Answer;