import React, { useState, useRef, useEffect } from "react";
import Intro from "./Intro";
import jsonData from "../data/quizData.json";
import Question from "./Question";
import Result from "./Result";
import ProgressTracker from "./ProgressTracker";
import "../styles/Quiz.scss";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [clickable, setClickable] = useState(true);
  const [score, setScore] = useState(0);
  // const buttonRef = useRef(null);

  const setButtonState = (status) => {
    switch (status) {
      case -1:
        return "Let's Start!";
      case "result":
        return "Play Again?";
      case jsonData.length - 1:
        return "See Your Results!";
      default:
        return "Next";
    }
  };

  const resetGame = () => {
    setSelectedAnswers([]);
    setCurrentQuestion(-1);
    setClickable(true);
    setScore(0);
  };

  return (
    <section
      // className={currentQuestion === -1 ? "quiz intro" : "quiz"}
      className={`quiz ${currentQuestion === -1 && "intro"} ${
        currentQuestion === "result" && "result"
      }`}
    >
      {currentQuestion !== -1 && (
        <ProgressTracker
          currentQuestion={currentQuestion}
          totalQuestions={jsonData.length}
        />
      )}
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
          setCurrentQuestion={setCurrentQuestion}
          data={jsonData[currentQuestion]}
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          clickable={clickable}
          setClickable={setClickable}
          score={score}
          setScore={setScore}
        />
      )}
      <button
        // ref={buttonRef}
        className={
          currentQuestion === selectedAnswers.length
            ? "unavailable"
            : "available"
        }
        onClick={() => {
          if (currentQuestion === jsonData.length - 1) {
            setCurrentQuestion("result");
          } else if (currentQuestion === "result") {
            resetGame();
          } else {
            if (currentQuestion === selectedAnswers.length) {
              return;
            } else {
              setCurrentQuestion(currentQuestion + 1);
            }
          }
          setClickable(true);
        }}
      >
        {setButtonState(currentQuestion)}
      </button>
    </section>
  );
}
