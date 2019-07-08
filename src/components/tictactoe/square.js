import React from "react";

function square({ index, handlePlay, value }) {
  const onClick = () => {
    handlePlay(index);
  };

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default square;
