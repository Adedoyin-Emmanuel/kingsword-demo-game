import React from "react";
import CategoryIcon from "./../assets/images/category.svg";
import HomeIcon from "./../assets/images/home.svg";
import RecentIcon from "./../assets/images/recent.svg";
import CurrentPageNotch from "./app-current-page-notch";
const Footer = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="app-footer d-flex align-items-center justify-content-around brand-category-love-color p-2">
        <section className="home d-flex align-items-center justify-content-center flex-column">
          <img src={HomeIcon} alt="Home" height={"18"} width={"18"}/>
          <CurrentPageNotch/>
        </section>

        <section className="category d-flex align-items-center justify-content-center flex-column">
          <img src={CategoryIcon} alt="Category" height={"18"} width={"18"} />
          <CurrentPageNotch/>
        </section>

        <section className="recent d-flex align-items-center justify-content-center flex-column">
          <img src={RecentIcon} alt="Recent" height={"18"} width={"18"} />
          <CurrentPageNotch/>
        </section>
      </section>
    </React.Fragment>
  );
};

export default Footer;
