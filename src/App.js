import React from "react";
import Question from "./components/Question";
import Quiz from "./components/Quiz";
import "./App.css";

function App() {
  return (
    <div className="App">
      Quiz app
      <Quiz />
      <Question />
    </div>
  );
}

export default App;
