import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(require("./data/trivia-data.json"));

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <div className="App">
      <header className="App-header">Trivia App</header>
    </div>
  );
}

export default App;
