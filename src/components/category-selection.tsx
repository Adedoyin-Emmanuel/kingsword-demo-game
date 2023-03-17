import React, {MouseEvent} from 'react'

interface categorySelectionProp
{
    categoryText: string;
    id:string;
    onClick: (event:MouseEvent<HTMLDivElement>) => void;
    categoryImageSource: string;
    
}
const CategorySelection = ({categoryText, id, onClick, categoryImageSource}: categorySelectionProp):JSX.Element => {
    return (
    
        <React.Fragment>
            <section className="d-flex align-items-center justify-content-center flex-column col-6 col-md-3" >
            <section className="category-selection mx-3 d-flex align-items-center justify-content-center" onClick={onClick} id={id}>
                <img src={categoryImageSource} className="img-fluid" alt={"category images"}/>
            </section>
            
            <p className="category-name text-capitalize brand-small-text-2 py-2 text-center">{categoryText}</p>
            
            </section>
        </React.Fragment>
    )
}


export default CategorySelection;