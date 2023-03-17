import React, { useState, useMemo, MouseEvent } from "react";
import CategorySelection from "../components/category-selection";
import FooterSlider from "../components/footer-slider";
import db from "../backend/db";
import { useNavigate } from "react-router-dom";
import LoveImage from "./../assets/images/love.svg";
import CoupleImage from "./../assets/images/love-2.svg";
import FamilyImage from "./../assets/images/parenting.svg";
import GiftImage from "./../assets/images/gift.svg";

const Category = (): JSX.Element => {
  const userName = db.get("KINGSWORD_GAME_USERNAME") || "user";

  const [elementToInsert, setElementToInsert] = useState<JSX.Element>(
    <React.Fragment></React.Fragment>
  );

  const navigateTo = useNavigate();

  const testClick = (event: MouseEvent<HTMLDivElement>) => {
    navigateTo(`/app/category/${event.currentTarget.id}`);
  };

  useMemo(() => {
    const element = (): JSX.Element => {
      return (
        <section className="footer-slider-body d-flex align-items-center justify-content-center">
          <section className="game-categories my-5 d-flex align-items-center justify-content-around flex-wrap row">
            <CategorySelection
              categoryText="love revs"
              onClick={(event: MouseEvent<HTMLDivElement>) => testClick(event)}
              categoryImageSource={LoveImage}
              id={"love"}
            />
            <CategorySelection
              categoryText="marriage"
              onClick={(event: MouseEvent<HTMLDivElement>) => testClick(event)}
              categoryImageSource={CoupleImage}
              id={"marriage"}
            />
            <CategorySelection
              categoryText="Benevolence"
              onClick={(event: MouseEvent<HTMLDivElement>) => testClick(event)}
              categoryImageSource={GiftImage}
              id={"Benevolence"}
            />
            <CategorySelection
              categoryText="Parenting"
              onClick={(event: MouseEvent<HTMLDivElement>) => testClick(event)}
              categoryImageSource={FamilyImage}
              id={"Parenting"}
            />
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
