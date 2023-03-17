import React, { useState, useMemo } from "react";
import CategorySelection from "../components/category-selection";
import FooterSlider from "../components/footer-slider";
import db from "../backend/db";

const Category = (): JSX.Element => {
  const userName = db.get("KINGSWORD_GAME_USERNAME") || "user";

  const [elementToInsert, setElementToInsert] = useState<JSX.Element>(
    <React.Fragment></React.Fragment>
  );

  const testClick = () => {
    alert("you clicked me!");
  };

  useMemo(() => {
    const element = (): JSX.Element => {
      return (
        <section className="footer-slider-body d-flex align-items-center justify-content-center">
          <section className="game-categories my-5 d-flex align-items-center justify-content-around flex-wrap">
            <CategorySelection categoryText="love refs" onClick={testClick} />
            <CategorySelection categoryText="marriage" onClick={testClick} />
            <CategorySelection categoryText="blessing" onClick={testClick} />
            <CategorySelection categoryText="favour" onClick={testClick} />
          </section>
        </section>
      );
    };
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
