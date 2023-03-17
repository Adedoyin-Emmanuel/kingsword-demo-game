import React from "react";
import CurrentPageNotch from "../components/app-current-page-notch";
import Footer from "../components/app-footer";
import Swal from "sweetalert2";
import ChurchImage from "./../assets/images/family7.svg";
import Button from "../components/button";

const Home = (): JSX.Element => {
  const handleButtonClick = (): void => {
    alert("you clicked me");
  };
  return (
    <React.Fragment>
      <section className="container-fluid p-0">
        <section className="d-flex align-items-start justify-content-start my-4">
          <h3 className="fs-3 my-1 text-capitalize text-start px-3 fw-bold">
            Hi!
          </h3>
        </section>
        <p className="text-capitalize px-3 my-0">welcome to kingsword game!</p>
        
        <section className="main-app-container d-flex justify-content-center flex-column">
          <section className="image-section d-flex align-items-center justify-content-center">
            <img src={ChurchImage} className="" width={"450"} height={"300"} />
          </section>

          <section className="button-container d-flex align-items-center justify-content-center my-4">
            <Button
              text="start game!"
              className="fw-bold brand-button width-toggle-6 text-light my-2"
              onClick={handleButtonClick}
            ></Button>
          </section>
        </section>
        <Footer homePage={<CurrentPageNotch />} />
      </section>
    </React.Fragment>
  );
};

export default Home;
