import React from "react";
import {useParams, useLocation} from "react-router-dom";
import db from "../backend/db";
import Footer from "../components/app-footer";
import CurrentPageNotch from "../components/app-current-page-notch";
import Achievement from "./../assets/images/achievement1.svg";

const Result = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="container-fluid p-0">
        <section className="test-result d-flex align-items-center justify-content-center">
          
          <img src={Achievement} className="m-auto"/>
        </section>
        <Footer resultPage={<CurrentPageNotch/>}/>
      </section>
    </React.Fragment>
  );
};


export default Result;
