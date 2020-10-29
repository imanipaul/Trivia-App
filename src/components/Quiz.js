import React, { useEffect, useState } from "react";
import Intro from "./Intro";
import jsonData from "../data/quizData.json";
import Question from "./Question";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);

  useEffect(() => {
    console.log("json data is", jsonData);
    console.log("json length", jsonData.length);
    console.log("current question is", currentQuestion);
  }, [currentQuestion]);

  return (
    <section className="quiz">
      Quiz component
      {currentQuestion === -1 ? (
        <Intro
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
        />
      ) : (
        <Question currentQuestion={currentQuestion} />
      )}
      <button
        onClick={() => {
          currentQuestion === jsonData.length - 1
            ? console.log("done")
            : setCurrentQuestion(currentQuestion + 1);
        }}
      >
        Start
      </button>
    </section>
  );
}
