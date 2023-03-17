import React from 'react'

interface categorySelectionProp
{
    categoryText: string;
    onClick: () => void;
}
const CategorySelection = ({categoryText, onClick}: categorySelectionProp):JSX.Element => {
    return (
    
        <React.Fragment>
            <section className="category-secection" onClick={onClick}>
                {categoryText}  
            </section>
        </React.Fragment>
    )
}


export default CategorySelection;