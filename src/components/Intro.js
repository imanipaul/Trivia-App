import React from "react";

export default function Intro(props) {
  return (
    <section className="intro">
      This is the intro. Click the button to start the quiz.
      <button
        onClick={() => {
          props.setCurrentQuestion(props.currentQuestion + 1);
        }}
      >
        Start
      </button>
    </section>
  );
}
