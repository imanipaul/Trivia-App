import React, { useEffect, useState, useRef } from "react";
import Intro from "./Intro";
import jsonData from "../data/quizData.json";
import Question from "./Question";
import Result from "./Result";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [clickable, setClickable] = useState(true);
  //   const currentAnswer = useRef(null);

  useEffect(() => {
    console.log("current question is", currentQuestion);
    console.log("selected answers is", selectedAnswers);
  }, [currentQuestion, selectedAnswers]);

  return (
    <section className="quiz">
      {currentQuestion === -1 ? (
        <Intro
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
        />
      ) : currentQuestion === "result" ? (
        <Result />
      ) : (
        <Question
          currentQuestion={currentQuestion}
          data={jsonData[currentQuestion]}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          clickable={clickable}
          setClickable={setClickable}
          //   currentAnswer={currentAnswer}
        />
      )}

      {currentQuestion !== "result" && (
        <button
          onClick={() => {
            currentQuestion === jsonData.length - 1
              ? setCurrentQuestion("result")
              : setCurrentQuestion(currentQuestion + 1);

            setClickable(true);
            // console.log("current answer ref", currentAnswer.current);
            // currentAnswer && currentAnswer.current.classList.remove("selected");
          }}
        >
          Next
        </button>
      )}
    </section>
  );
}
