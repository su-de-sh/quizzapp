import { MCQ } from "./components/MCQ";
import React, { useState, useEffect } from "react";
import apiCall from "./services/mcqapi";
import "./App.css";

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    apiCall.read().then((data) => setQuestions(data));
  }, []);

  // Shuffle answers

  return (
    <div className="body">
      <MCQ questions={questions} />
    </div>
  );
};

export default App;
