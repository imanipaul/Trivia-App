import React, { useEffect, useState } from "react";
import "../styles/Question.scss";
import Answer from "./Answer";

export default function Question(props) {
  //   const [clickable, setClickable] = useState(true);

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
          <Answer
            key={index}
            answer={answer}
            setSelectedAnswers={props.setSelectedAnswers}
            selectedAnswers={props.selectedAnswers}
            clickable={props.clickable}
            setClickable={props.setClickable}
          />
        ))}
      </div>
    </section>
  );
}
