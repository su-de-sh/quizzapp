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
  return (
    <div>
      {questions.map((question) => (
        <li key={question.id}>
          {
            <>
              <h3>{question.question}</h3>
              <ol>
                {" "}
                {shuffle([
                  ...question.incorrectAnswers,
                  question.correctAnswer,
                ]).map((answer, index) => (
                  <li key={index}>{answer}</li>
                ))}
              </ol>
            </>
          }
        </li>
      ))}
    </div>
  );
}
