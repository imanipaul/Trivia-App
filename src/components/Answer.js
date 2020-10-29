import React from "react";

export default function Answer(props) {
  return (
    <div
      className="answer"
      onClick={() =>
        props.setSelectedAnswers([...props.selectedAnswers, props.answer])
      }
    >
      {props.answer}
    </div>
  );
}
