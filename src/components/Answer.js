import React, { useEffect, useRef } from "react";

export default function Answer(props) {
  const answerRef = useRef(null);

  useEffect(() => {
    console.log("---the answer ref is now---", answerRef.current);
    answerRef.current.classList.remove("selected");
  }, [props.answer]);

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
            }
          : undefined
      }
    >
      {props.answer}
    </div>
  );
}
