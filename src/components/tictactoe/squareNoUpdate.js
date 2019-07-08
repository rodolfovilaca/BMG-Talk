import React from "react";

function square({ player }) {
  let value = null
  const onClick = () => {
    if (player === "x") {
      value = "x";
    } else {
      value = "o";
    }
  };

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default square;
