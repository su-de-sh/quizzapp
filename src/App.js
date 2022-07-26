// import { MCQ } from "./components/MCQ";
// import React, { useState, useEffect } from "react";
// import apiCall from "./services/mcqapi";
// import "./App.css";

// const App = () => {
//   const [questions, setQuestions] = useState([]);
//   const [questionNumber, setQuestionNumber] = useState(0);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     apiCall.read().then((data) => setQuestions(data));
//   }, []);

//   //  checkAnswer

//   const checkAnswer = (event) => {
//     setQuestionNumber(questionNumber + 1);

//     if (
//       event.target.innerHTML.trim() === questions[questionNumber].correctAnswer
//     ) {
//       setScore(score + 1);
//     }
//   };

//   let questionLength = questions.map((q) => q.question).length;

//   return !questionLength ? (
//     <div>Loading...</div>
//   ) : questionLength > questionNumber ? (
//     <div className="body">
//       <div className="question-count">
//         <span>Question {questionNumber}</span>/{questionLength}
//       </div>
//       <MCQ
//         questions={questions}
//         questionNumber={questionNumber}
//         checkAnswer={checkAnswer}
//       />
//     </div>
//   ) : (
//     <div className="app">
//       <div className="score-section">
//         <div>
//           Your Score: {score} out of {questionLength}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";
import Backdrop from "./components/backdrop/Backdrop";
import Drawer from "./components/drawer/Drawer";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
// import Questions from "./components/quiz/Quiz";

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Navbar open={open} handleOpen={handleOpen} handleClose={handleClose} />
      <Backdrop handleClose={handleClose} open={open} />
      <Drawer open={open} handleClose={handleClose} />
      <Home />
      {/* <Questions /> */}
    </div>
  );
};

export default App;
