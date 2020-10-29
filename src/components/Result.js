import React from "react";

export default function Result(props) {
  return (
    <section className="result">
      Results!!
      <p>Your score is: {props.score}</p>
      <p>Your selected answers were:</p>
      {props.selectedAnswers.map((answer, index) => (
        <p key={index}>
          {index + 1} : {answer}
        </p>
      ))}
    </section>
  );
}
