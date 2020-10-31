import React, { useEffect, useRef, useState } from "react";
import "../styles/ProgressTracker.scss";

export default function ProgressTracker(props) {
  let trackerRef = useRef(null);
  const [totalWidth, setTotalWidth] = useState(
    trackerRef.current && trackerRef.current.clientWidth
  );

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

  return <section ref={trackerRef} className="progress-tracker"></section>;
}
