import { Button } from "@mui/material";
import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="container">
          <div className="intro">
            <div className="intro-right">
              <h1>Online quizz platform</h1>
              <h1>for student</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button sx={{ background: "navy", color: "#ffffff" }}>
                Learn more
              </Button>
            </div>
            <div className="intro-left">
              <img
                className="intro-pic"
                src="../../../assets/quiz.svg"
                alt="pic"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
