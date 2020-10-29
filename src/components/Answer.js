import React, { useEffect, useRef } from "react";

export default function Answer(props) {
  const answerRef = useRef(null);

  useEffect(() => {
    answerRef.current.classList.remove("selected");
  }, [props.answer]);

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

              answerRef.current.classList.add("selected");
              matchAnswers(props.answer, props.correctAnswer);
            }
          : undefined
      }
    >
      {props.answer}
    </div>
  );
}
