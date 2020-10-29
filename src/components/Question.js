import React, { useEffect } from "react";

export default function Question(props) {
  useEffect(() => {
    console.log("current question data", props.data);
  });

  return (
    <section className="question">
      Question component
      <h1>Question # {props.currentQuestion + 1}</h1>
    </section>
  );
}
