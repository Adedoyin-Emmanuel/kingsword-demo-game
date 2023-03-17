import React from "react";
import CurrentPageNotch from '../components/app-current-page-notch';
import Footer from "../components/app-footer";
import Swal from "sweetalert2";
const Home = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="container-fluid p-0">
        <h3 className="fs-3 my-3 text-capitalize text-start px-3 fw-bold">Hi!</h3>
        
        <p className="text-capitalize px-3">welcome to kingsword game!</p>
        <Footer homePage={<CurrentPageNotch/>} />
      </section>
    </React.Fragment>
  );
};


export default Home;
