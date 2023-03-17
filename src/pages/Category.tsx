import React from "react";
import CurrentPageNotch from "../components/app-current-page-notch";
import Footer from "../components/app-footer";
import Swal from "sweetalert2";
import ChurchImage from "./../assets/images/family7.svg";
import Button from "../components/button";
import db from "../backend/db";

const Category = (): JSX.Element => {
  const userName = db.get("KINGSWORD_GAME_USERNAME") ||  "user"
  return (
    <React.Fragment>
          <section className="container-fluid p-0">
        <section className="d-flex align-items-start justify-content-start my-4">
          <h3 className="fs-3 my-1 text-capitalize text-start px-3 fw-bold">
            Hi {(userName)}!
          </h3>
        </section>
        <p className="text-capitalize px-3 my-0">please select a category</p>
        
        <Footer categoryPage={<CurrentPageNotch />} />
      </section>
    </React.Fragment>
  );
};


export default Category;
