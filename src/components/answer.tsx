import React, {MouseEvent} from 'react'

interface answerProps
{
    text:string,
    onClick: (event:MouseEvent<HTMLDivElement>)=> void;
}
const Answer = ({text, onClick}: answerProps):JSX.Element =>{
    return (
        <React.Fragment>
        
            <section className="col-6 col-md-3 d-flex align-items-center justify-content-center" >
                <section className="answer-container-inner-section d-flex align-items-center justify-content-center shadow my-4 mx-2" onClick={onClick}>
                   <h6 className="answer-text fw-bold fs-6 text-capitalize m-0" id={text}>{text}</h6>      
                </section>
            </section>
                
        </React.Fragment>
    )
}

export default Answer;