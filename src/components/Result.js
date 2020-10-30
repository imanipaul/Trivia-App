import React from "react";
import "../styles/Result.scss";

export default function Result(props) {
  return (
    <section className="result">
      <h1>Results</h1>
      <h2>
        You scored <span className="score">{props.score}</span>
      </h2>
      <div className="result-answer-container">
        {props.selectedAnswers.map((answer, index) => (
          <p key={index} className="result-answer">
            {index + 1} : {answer}
          </p>
        ))}
      </div>
    </section>
  );
}
