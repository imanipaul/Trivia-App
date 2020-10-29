import React, { useEffect } from "react";
import jsonData from "../data/quizData.json";

export default function Quiz() {
  useEffect(() => {
    console.log("json data is", jsonData);
  });

  return <section className="quiz">Quiz component</section>;
}
