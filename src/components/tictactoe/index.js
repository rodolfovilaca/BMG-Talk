import React, { useState } from "react";
import Square from "./square";
import "./style.css";

function game() {
  const [player, setPlayer] = useState("x");
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handlePlay = index => {
    setSquares(prevState => {
      prevState[index] = player;
      return prevState;
    });
    setPlayer(prevState => (prevState === "x" ? "o" : "x"));
  };

  return (
    <div className="game">
      {squares.map((value, index) => (
        <Square index={index} value={value} handlePlay={handlePlay} />
      ))}
    </div>
  );
}

export default game;
