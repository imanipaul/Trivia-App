import React, { useEffect, useState } from "react";
import Intro from "./Intro";
import jsonData from "../data/quizData.json";
import Question from "./Question";
import Result from "./Result";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  useEffect(() => {
    console.log("current question is", currentQuestion);
  }, [currentQuestion]);

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
        />
      )}

      {currentQuestion !== "result" && (
        <button
          onClick={() => {
            currentQuestion === jsonData.length - 1
              ? setCurrentQuestion("result")
              : setCurrentQuestion(currentQuestion + 1);
          }}
        >
          Next
        </button>
      )}
    </section>
  );
}
