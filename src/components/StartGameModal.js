import React from "react";

const StartGameModal = ({ startGame }) => {
  return (
    <div>
      <p>Find all the characters as quickly as you can!</p>
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default StartGameModal;
