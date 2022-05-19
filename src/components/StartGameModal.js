import React from "react";

const StartGameModal = ({ startGame }) => {
  return (
    <div className="start-modal">
      <h2>Find all the characters as quickly as you can!</h2>
      <p>You will be timed when you click start</p>
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default StartGameModal;
