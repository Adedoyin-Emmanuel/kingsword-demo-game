import React, {MouseEvent} from 'react'

interface categorySelectionProp
{
    categoryText: string;
    id:string;
    onClick: (event:MouseEvent<HTMLDivElement>) => void;
    
}
const CategorySelection = ({categoryText, id, onClick}: categorySelectionProp):JSX.Element => {
    return (
    
        <React.Fragment>
            <section className="d-flex align-items-center justify-content-center flex-column" >
            <section className="category-selection mx-3" onClick={onClick} id={id}>
                 
            </section>
            
            <p className="category-name text-capitalize brand-small-text py-2 text-center">{categoryText}</p>
            
            </section>
        </React.Fragment>
    )
}


export default CategorySelection;