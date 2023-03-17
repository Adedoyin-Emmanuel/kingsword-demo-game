import React from "react";

interface FooterSliderProps
{
   elementToInsert?: JSX.Element;
}
const FooterSlider = ({elementToInsert}: FooterSliderProps): JSX.Element => {
  return (
    <React.Fragment>
      <section className="footer-slider">
        <section className="footer-slider-close-button"></section>
        <section className="footer-slider-body"></section>
        
      </section>
    </React.Fragment>
  );
};



export default FooterSlider;
