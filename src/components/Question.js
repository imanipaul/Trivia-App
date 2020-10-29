import React from "react";

export default function Question(props) {
  return (
    <section className="question">
      Question component
      <h1>Question # {props.currentQuestion + 1}</h1>
    </section>
  );
}
