import React, { useEffect, useState } from "react";
import Intro from "./Intro";
import jsonData from "../data/quizData.json";
import Question from "./Question";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(-1);

  useEffect(() => {
    console.log("json data is", jsonData);
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
        <Question />
      )}
    </section>
  );
}
