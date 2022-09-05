import { Button } from "@mui/material";
import React from "react";
import picture from "../../img/undraw_Online_test_re_kyfx.png";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="container">
          <div className="intro">
            <div className="intro-right">
              <div className="right-contain">
                <h1 className="title">Online quizz platform</h1>
                <h1 className="title">for student</h1>
                <p className="loream">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Button sx={{ background: "navy", color: "white" }}>
                  Learn more
                </Button>
              </div>
            </div>
            <div className="intro-left">
              <img src={picture} alt="pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
