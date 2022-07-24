import React, { useState } from "react";
export function MCQ({ questions }) {
  const [questionNumber, setQuestionNumber] = useState(1);

  // suffle
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  let questionLength = questions.map((q) => q.question).length;

  return (
    <div className="app">
      {
        questions.map((question) => (
          <>
            {
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {questionNumber}</span>/{questionLength}
                  </div>
                  <div className="question-text">{question.question}</div>
                </div>
                <div className="answer-section">
                  {shuffle([
                    ...question.incorrectAnswers,
                    question.correctAnswer,
                  ]).map((answer, index) => (
                    <button
                      key={index}
                      onClick={() => setQuestionNumber(questionNumber + 1)}
                    >
                      {answer}
                    </button>
                  ))}
                </div>
              </>
            }
          </>
        ))[Math.floor(Math.random() * questionLength)]
      }
    </div>
  );
}
