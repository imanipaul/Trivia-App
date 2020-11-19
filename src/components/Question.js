import React, { useEffect, useState } from "react";
import Answer from "./Answer";
import "../styles/Question.scss";

export default function Question(props) {
  let allAnswers = [props.data.correct, ...props.data.incorrect];
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [shuffled, setShuffled] = useState(false);

  useEffect(() => {
    // resetAnswers();
    shuffleAnswers(allAnswers);
  }, [props.currentQuestion]);

  const resetAnswers = () => {
    setShuffled(false);
    setShuffledAnswers([]);
  };

  const shuffleAnswers = (answersArray) => {
    for (let i = answersArray.length - 1; i > 0; i--) {
      const val = Math.floor(Math.random() * i);
      const hold = answersArray[i];
      answersArray[i] = answersArray[val];
      answersArray[val] = hold;
    }
    setShuffledAnswers(answersArray);
    setShuffled(true);
  };

  return (
    <section className="question">
      <h1>Question # {props.currentQuestion + 1}</h1>
      <h2>{props.data.question}</h2>
      <div className="answers">
        {shuffled &&
          shuffledAnswers.map((answer, index) => (
            <Answer
              key={index}
              answer={answer}
              setSelectedAnswers={props.setSelectedAnswers}
              selectedAnswers={props.selectedAnswers}
              clickable={props.clickable}
              setClickable={props.setClickable}
              score={props.score}
              setScore={props.setScore}
              correctAnswer={props.data.correct}
            />
          ))}
      </div>
    </section>
  );
}
