import React, { useEffect } from "react";
import "../styles/Question.scss";

export default function Question(props) {
  let allAnswers = [props.data.correct, ...props.data.incorrect];

  useEffect(() => {
    console.log("current question data", props.data);
    console.log("all answers", allAnswers);
  }, [props.data, allAnswers]);

  return (
    <section className="question">
      <h1>Question # {props.currentQuestion + 1}</h1>
      <h2>{props.data.question}</h2>
      <div className="answers">
        {allAnswers.map((answer, index) => (
          <p
            key={index}
            onClick={() =>
              props.setSelectedAnswers([...props.selectedAnswers, answer])
            }
          >
            {answer}
          </p>
        ))}
      </div>
    </section>
  );
}
