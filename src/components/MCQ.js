import React from "react";
export function MCQ({ questions }) {
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
                <h3 className="question-section">{question.question}</h3>
                <div className="answer-section">
                  {shuffle([
                    ...question.incorrectAnswers,
                    question.correctAnswer,
                  ]).map((answer, index) => (
                    <button key={index}>{answer}</button>
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
