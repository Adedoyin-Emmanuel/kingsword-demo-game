import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Game =  ():JSX.Element => {

    const {category} = useParams();
    
    return(
        <React.Fragment>
            <section className="container-fluid">
               <h3 className="fs-3 fw-bold"> You selected the {category} category</h3>
            </section>
        </React.Fragment>
    );
}

export default Game;