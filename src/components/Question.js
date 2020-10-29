import React, { useEffect } from "react";

export default function Question(props) {
  useEffect(() => {
    console.log("current question data", props.data);
  });

  return (
    <section className="question">
      <h1>Question # {props.currentQuestion + 1}</h1>
      <h2>{props.data.question}</h2>
    </section>
  );
}
