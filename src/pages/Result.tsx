import React, { useState, useEffect, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import db from "../backend/db";
import Footer from "../components/app-footer";
import CurrentPageNotch from "../components/app-current-page-notch";
import Achievement from "./../assets/images/achievement1.svg";
import CryImage from "./../assets/images/cry.svg";
import ThumbsDown from "./../assets/images/thumbs-down.svg";
import Button from "../components/button";
import Confetti from "react-confetti";
import { navigateToCategory } from "../includes/scripts/script";

const Result = (): JSX.Element => {
  const { category } = useParams();
  const location = useLocation();
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [imageType, setImageType] = useState<string>(" ");

  let remark = "";
  
  useMemo(() => {
    const totalQuestionsTaken =
      parseInt(db.get("KINGSWORD_GAME_TOTAL_QUESTIONS")) || 0;
    const scorePercentage = (parseInt(db.get("KINGSWORD_GAME_SCORE")) / totalQuestionsTaken) * 100;

    //check if the users scores above or below average!
    if (scorePercentage >= 75) {
      remark = "Excellent ";
      setImageType(Achievement);
      setShowConfetti(true);
    } else if (scorePercentage >= 60) {
      setImageType(Achievement);
      remark = "Nice Efforts";
      setShowConfetti(true);
    } else if (scorePercentage >= 40) {
      remark = "Fair Job!";
      setImageType(ThumbsDown);
    } else {
      setImageType(CryImage);
      remark = "Failed!";
    }
    db.create("KINGSWORD_GAME_REMARK", remark);
    db.create("KINGSWORD_GAME_SCORE_PERCENTAGE", `${scorePercentage}`);
  }, []);

  return (
    <React.Fragment>
      <section className="container-fluid p-0 result-container d-flex align-items-center justify-content-around flex-column">
        {showConfetti && <Confetti />}
        <section className="remark-heading">
          <h2 className="text-capialize text-center fw-bold fs-2 my-2">{db.get("KINGSWORD_GAME_REMARK")}</h2>
        </section>
        <section className="test-result d-flex align-items-center justify-content-center">
          <img src={imageType} className="m-auto" />
        </section>
        <section className="score-container">
          <h4 className="fs-4 fw-bold text-center text-capitalize">{parseInt(db.get("KINGSWORD_GAME_SCORE_PERCENTAGE"))}%</h4>
        </section>
        <section className="remark-comment">
          <p className="text-muted text-capitalize">
            Thanks for your participation!
          </p>
        </section>

        <Button
          text="Play again"
          className="brand-button my-3 width-toggle-6"
          onClick={navigateToCategory}
        />
        <br/><br/>
        <Footer resultPage={<CurrentPageNotch />} />
      </section>
    </React.Fragment>
  );
};

export default Result;
