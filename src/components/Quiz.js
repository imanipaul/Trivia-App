import React, { useEffect, useState, useRef } from "react";
import Intro from "./Intro";
import jsonData from "../data/quizData.json";
import Question from "./Question";
import Result from "./Result";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [clickable, setClickable] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log("score is", score);
  }, [currentQuestion, selectedAnswers]);

  return (
    <section className="quiz">
      {currentQuestion === -1 ? (
        <Intro
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
        />
      ) : currentQuestion === "result" ? (
        <Result selectedAnswers={selectedAnswers} score={score} />
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
          score={score}
          setScore={setScore}
        />
      )}

      {currentQuestion !== "result" && (
        <button
          onClick={() => {
            currentQuestion === jsonData.length - 1
              ? setCurrentQuestion("result")
              : setCurrentQuestion(currentQuestion + 1);

            setClickable(true);
          }}
        >
          Next
        </button>
      )}
    </section>
  );
}
