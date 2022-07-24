import { MCQ } from "./components/MCQ";
import React, { useState, useEffect } from "react";
import apiCall from "./services/mcqapi";

const App = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    apiCall.read().then((data) => setQuestions(data));
  }, []);

  // Shuffle answers

  return (
    <>
      <MCQ questions={questions} />
    </>
  );
};

export default App;
