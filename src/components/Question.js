import React from "react";
import Answer from "./Answer";
import "../styles/Question.scss";

export default function Question(props) {
  let allAnswers = [props.data.correct, ...props.data.incorrect];

  return (
    <section className="question">
      <h1>Question # {props.currentQuestion + 1}</h1>
      <h2>{props.data.question}</h2>
      <div className="answers">
        {allAnswers.map((answer, index) => (
          <Answer
            key={index}
            answer={answer}
            setSelectedAnswers={props.setSelectedAnswers}
            selectedAnswers={props.selectedAnswers}
            clickable={props.clickable}
            setClickable={props.setClickable}
            score={props.score}
            setScore={props.setScore}
            correctAnswer={props.data.correct}
          />
        ))}
      </div>
    </section>
  );
}
