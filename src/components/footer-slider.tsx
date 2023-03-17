import React from "react";

interface FooterSliderProps {
  childComponent: JSX.Element;
}
const FooterSlider = ({ childComponent }: FooterSliderProps): JSX.Element => {
  return (
    <React.Fragment>
      <section className="footer-slider d-flex  justify-content-center w-100">
        {childComponent}
      </section>
    </React.Fragment>
  );
};

export default FooterSlider;
