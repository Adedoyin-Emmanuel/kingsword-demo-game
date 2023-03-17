import React from 'react';
import { useLocation } from 'react-router-dom';
const Game =  ():JSX.Element => {

    const location = useLocation();
    
    
    console.log(location);
    
    return(
        <React.Fragment>
            <section className="container-fluid">
                {}
            </section>
        </React.Fragment>
    );
}