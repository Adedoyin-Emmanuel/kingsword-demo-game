import React, {MouseEvent} from 'react'
import $ from "jquery";
interface answerProps
{
    text:string,
    onClick: (event:MouseEvent<HTMLDivElement>)=> void;
}
const Answer = ({text, onClick}: answerProps):JSX.Element =>{


    return (
        <React.Fragment>
        
            <section className="col-6 col-md-3 d-flex align-items-center justify-content-center p-2" >
                <section className="answer-container-inner-section d-flex align-items-center justify-content-center shadow my-4 mx-2" onClick={onClick} id="answers-section">
                   <p className="answer-text brand-small-text-2 fw-bold text-capitalize m-0" id={text}>{text}</p>      
                </section>
            </section>
                
        </React.Fragment>
    )
}

export default Answer;