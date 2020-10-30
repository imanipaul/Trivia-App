import React, { useEffect, useRef } from "react";
import "../styles/ProgressTracker.scss";

export default function ProgressTracker(props) {
  let trackerRef = useRef(null);
  let totalWidth;

  useEffect(() => {
    totalWidth = trackerRef.current.clientWidth;
    console.log("totalWidth", totalWidth);
  });

  return <section ref={trackerRef} className="progress-tracker"></section>;
}
