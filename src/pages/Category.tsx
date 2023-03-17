import React, { useState, useMemo } from "react";
import CurrentPageNotch from "../components/app-current-page-notch";
import Button from "../components/button";
import FooterSlider from "../components/footer-slider";
import db from "../backend/db";

const Category = (): JSX.Element => {
  const userName = db.get("KINGSWORD_GAME_USERNAME") || "user";

  const [elementToInsert, setElementToInsert] = useState<JSX.Element>(
    <React.Fragment></React.Fragment>
  );

  useMemo(() => {
    const element = ():JSX.Element =>{
      return (
        <section className="footer-slider-body">
          <section className="footer-slider-notch my-2"></section>
        
        </section>
      );
    }
    setElementToInsert(element);
  }, []);

  return (
    <React.Fragment>
      <section className="container-fluid p-0">
        <section className="d-flex align-items-start justify-content-start my-4">
          <h3 className="fs-3 my-1 text-capitalize text-start px-3 fw-bold">
            Hi {userName}!
          </h3>
        </section>
        <p className="text-capitalize px-3 my-0">please select a category</p>
        <FooterSlider childComponent={elementToInsert} />
      </section>
    </React.Fragment>
  );
};

export default Category;
