import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/app-footer';
import CurrentPageNotch 
from '../components/app-current-page-notch';
const Game =  ():JSX.Element => {

    const {category} = useParams();
    
    return(
        <React.Fragment>
            <section className="container-fluid p-0">
               <h3 className="fs-3 fw-bold my-3 p-2"> You selected the {category} category</h3>
               
               
               <Footer categoryPage={<CurrentPageNotch/>}/>
            </section>
        </React.Fragment>
    );
}

export default Game;