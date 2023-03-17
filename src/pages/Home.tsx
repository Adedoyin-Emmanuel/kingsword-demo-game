import React from "react";
import CurrentPageNotch from '../components/app-current-page-notch';
import Footer from "../components/app-footer";

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="container-fluid p-0">
        <h1>welcome home!</h1>
        <Footer homePage={<CurrentPageNotch/>} />
      </section>
    </React.Fragment>
  );
};


export default Home;
