import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import CurrentPageNotch from "../components/app-current-page-notch";
import Footer from "../components/app-footer";
import Swal from "sweetalert2";
import ChurchImage from "./../assets/images/family7.png";
import Button from "../components/button";
import db from "../backend/db";
import { configPath } from "../includes/scripts/particle-js-config";

const Home = (): JSX.Element => {
  const navigateTo = useNavigate();
  
  const handleButtonClick = (): void => {
    if (db.get("KINGSWORD_GAME_USERNAME") !== "undefined")  {
      navigateTo("/app/category");
    } else {
      Swal.fire({
        title: `<h3 class="fw-bold">Enter your name</h4>`,
        input: "text",
        confirmButtonColor: "rgb(248, 79, 79)",
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: false,
        inputAttributes: {
          autocapitalize: "on",
          style: "font-size:var(--brand-small-text)",
        },
        customClass: {
          popup: "z-index-class",
          confirmButton: "swal-confirm-button",
        },
      }).then((willProceed) => {
        if (willProceed.isConfirmed) {
          const $legit_value = willProceed.value.trim();
          if ($legit_value === undefined || $legit_value == "") {
            Swal.fire({
              title: `<h3 class="fw-bold">Invalid Input!</h4>`,
              html: "<p class=' text-center text-danger brand-small-text'>*Please enter your name*</p>",
              confirmButtonColor: "rgb(248, 79, 79)",
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              timer: 4000,
            });
          } else {
            db.create("KINGSWORD_GAME_USERNAME", willProceed.value);
            navigateTo("/app/category");
          }
        } else {
          window.location.reload();
        }
      });
    }
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
            <img
              src={ChurchImage}
              className="m-auto"
              width={"450"}
              height={"300"}
            />
          </section>

          <section className="button-container d-flex align-items-center justify-content-center my-4">
            <Button
              text="start game!"
              className="fw-bold brand-button width-toggle-6 my-2"
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
