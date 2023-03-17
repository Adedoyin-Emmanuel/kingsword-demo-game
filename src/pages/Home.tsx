import React from "react";
import Footer from "../components/app-footer";

const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="container-fluid p-0">
        <h1>welcome home!</h1>
        <Footer/>
      </section>
    </React.Fragment>
  );
};


export default Home;
