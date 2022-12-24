import React, { useState } from "react";

function Landing() {
  const [balls, setBalls] = useState(0);
  const [runs, setRuns] = useState(0);
  const [disable, setDisable] = useState(false);

  const getRuns = (e) => {
    if (balls == 5) {
      setDisable(true);
    }

    var run = Math.floor(Math.random() * 7);
    setRuns((prev) => prev + run);
    setBalls(balls + 1);
  };

  const reset = () => {
    setDisable(false);
    setBalls(0);
    setRuns(0);
  };

  return (
    <>
      <div className="board">
        <h1>Cricket Score Board</h1>
        <div>Balls : {balls}</div>
        <div>Runs : {runs}</div>
      </div>

      <div className="container">
        <p>
          You get total of 6 balls (1 over). The button gets disable after that.
        </p>

        <button onClick={getRuns} disabled={disable}>
          Click to hit the ball
        </button>
        <button onClick={reset}>Reset Game</button>
      </div>
    </>
  );
}

export default Landing;
