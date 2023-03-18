import React from "react";
import NotFoundImage from "./../assets/images/lost.svg";
import Button from "../components/button";
import { navigateToHome } from "../includes/scripts/script";

const NotFound = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="container-fluid not-found-container d-flex align-items-center justify-content-around flex-column">
        <section className="not-found-heading">
          <h2 className="text-center text-capitalize fw-bold fs-2">
            looks like you are lost!
          </h2>
        </section>
        <section className="image-container d-flex align-items-center justify-content-center">
          <img src={NotFoundImage} alt="lost image" className="img-fluid"  width={"250"} height={"250"}/>
        </section>
        <Button
          text="Go Home"
          className="brand-button my-3 width-toggle-6"
          onClick={navigateToHome}
        />
      </section>
    </React.Fragment>
  );
};

export default NotFound;
