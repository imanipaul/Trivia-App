import React, { useEffect, useRef } from "react";
import "../styles/Answer.scss";

export default function Answer(props) {
  const answerRef = useRef(null);

  useEffect(() => {
    answerRef.current.classList.remove("selected", "correct", "incorrect");
  }, [props.answer]);

  useEffect(() => {
    if (props.clickable) {
      answerRef.current.classList.add("clickable");
    } else {
      answerRef.current.classList.remove("clickable");
      //if answer is not clickable and it is correct, update class
      if (props.answer === props.correctAnswer) {
        answerRef.current.classList.add("correct");
      }
    }
  }, [props.clickable, props.answer, props.correctAnswer]);

  const matchAnswers = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
      props.setScore(props.score + 1);
    }
  };

  return (
    <div
      ref={answerRef}
      className={"answer"}
      style={{ cursor: props.clickable ? "default" : "not-allowed" }}
      onClick={
        //if answers are clickable...
        props.clickable
          ? () => {
              //...add value to select answers array
              props.setSelectedAnswers([
                ...props.selectedAnswers,
                props.answer,
              ]);

              //make all other buttons unclickable
              props.setClickable(false);

              //update classes for styling
              answerRef.current.classList.add(
                "selected",
                props.answer === props.correctAnswer ? "correct" : "incorrect"
              );
              matchAnswers(props.answer, props.correctAnswer);
            }
          : undefined
      }
    >
      {props.answer}
    </div>
  );
}
