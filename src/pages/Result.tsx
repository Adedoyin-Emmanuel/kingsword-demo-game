import React from "react";
import db from "../backend/db";
import Footer from "../components/app-footer";
import CurrentPageNotch from "../components/app-current-page-notch";

const Result = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="container-fluid p-0">
        <h1>you failed!</h1>
        
        <Footer resultPage={<CurrentPageNotch/>}/>
      </section>
    </React.Fragment>
  );
};


export default Result;
