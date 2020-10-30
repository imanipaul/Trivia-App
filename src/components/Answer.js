import React, { useEffect, useRef } from "react";
import "../styles/Answer.scss";

export default function Answer(props) {
  const answerRef = useRef(null);

  useEffect(() => {
    answerRef.current.classList.remove("selected", "correct", "incorrect");
    console.log("props clickable", props.clickable);
    // props.clickable
    //   ? answerRef.current.classList.add("clickable")
    //   : answerRef.current.classList.remove("clickable");
  }, [props.answer]);

  useEffect(() => {
    console.log("props clickable", props.clickable);
    props.clickable
      ? answerRef.current.classList.add("clickable")
      : answerRef.current.classList.remove("clickable");
  }, [props.clickable]);

  const matchAnswers = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
      console.log("~~~You chose correctly!!~~~");
      props.setScore(props.score + 1);
    } else {
      console.log("Thats wrong");
    }
  };

  return (
    <div
      ref={answerRef}
      className="answer"
      style={{ cursor: props.clickable ? "default" : "not-allowed" }}
      onClick={
        props.clickable
          ? () => {
              props.setSelectedAnswers([
                ...props.selectedAnswers,
                props.answer,
              ]);
              props.setClickable(false);

              console.log("answer ref current", answerRef.current);

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
