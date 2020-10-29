import React from "react";

export default function Answer(props) {
  return (
    <div
      className="answer"
      onClick={
        props.clickable
          ? () => {
              props.setSelectedAnswers([
                ...props.selectedAnswers,
                props.answer,
              ]);
              props.setClickable(false);
            }
          : undefined
      }
    >
      {props.answer}
    </div>
  );
}
