import React from "react";
import CategoryIcon from "./../assets/images/category.svg";
import HomeIcon from "./../assets/images/home.svg";
import RecentIcon from "./../assets/images/recent.svg";
import {navigateToHome, navigateToCategory, navigateToResult} from "./../includes/scripts/script";
interface footerActivePageNotch {
  homePage?: JSX.Element;
  categoryPage?: JSX.Element;
  resultPage?: JSX.Element;
  className?: string;
}
const Footer = ({
  homePage,
  categoryPage,
  resultPage,
  className
}: footerActivePageNotch): JSX.Element => {


  return (
    <React.Fragment>
      <section className={`app-footer d-flex align-items-center justify-content-between brand-category-love-color p-2 d-lg-none ${className}`}>
      
        <section className="home d-flex align-items-center justify-content-center flex-column mx-4" onClick={navigateToHome}>
          <img
            src={HomeIcon}
            alt="Home"
            height={"18"}
            width={"18"}
            className="fw-bold"
          />
          {homePage != undefined && homePage}
        </section>

        <section className="category d-flex align-items-center justify-content-center flex-column mx-4" onClick={navigateToCategory}>
          <img
            src={CategoryIcon}
            alt="Category"
            height={"18"}
            width={"18"}
            className="fw-bold"
          />
          {categoryPage != undefined && categoryPage}
        </section>

        <section className="recent d-flex align-items-center justify-content-center flex-column mx-4" onClick={navigateToResult}>
          <img
            src={RecentIcon}
            alt="Recent"
            height={"18"}
            width={"18"}
            className="fw-bold"
          />
          {resultPage != undefined && resultPage}
        </section>
      </section>
    </React.Fragment>
  );
};

export default Footer;
