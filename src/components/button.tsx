import React from 'react'

interface ButtonProps
{
    className: string;
    text: string;
    onClick?: () => void;
}
const Button = ({className, text, onClick}: ButtonProps): JSX.Element => {
    return (
        <React.Fragment>
            <button className={`${className} shadow`} onClick={onClick}>
                {text}
            </button>
        </React.Fragment>
    )
}


export default Button;