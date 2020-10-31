import React, { useEffect, useRef, useState } from "react";
import "../styles/ProgressTracker.scss";

export default function ProgressTracker(props) {
  let trackerRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(
    trackerRef.current && trackerRef.current.clientWidth
  );
  const [completedWidth, setCompletedWidth] = useState(0);

  useEffect(() => {
    setTotalWidth(trackerRef.current.clientWidth);

    window.addEventListener("resize", () =>
      setTotalWidth(trackerRef.current.clientWidth)
    );

    return () =>
      window.removeEventListener("resize", () =>
        setTotalWidth(trackerRef.current.clientWidth)
      );
  }, []);

  useEffect(() => {
    calculateInnerWidth(
      props.currentQuestion,
      props.totalQuestions,
      totalWidth
    );
  }, [props.currentQuestion, props.totalQuestions, totalWidth, completedWidth]);

  const calculateInnerWidth = (currentQuestion, totalQuestions, width) => {
    if (currentQuestion < 0) {
      console.log("Game has not started");
      return "Game has not started";
    }

    // divide current question by total questions to get percent of game completed
    let percentCompleted = currentQuestion / totalQuestions;

    //multiply percent completed by total width to get fractional width of progress bar
    setCompletedWidth(percentCompleted * width);

    console.log("completed width", completedWidth);
  };

  return (
    <section ref={trackerRef} className="progress-tracker">
      <div className="progress" style={{ width: completedWidth }}></div>
    </section>
  );
}
