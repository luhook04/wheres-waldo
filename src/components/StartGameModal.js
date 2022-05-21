import React from "react";

const StartGameModal = ({ startGame }) => {
  return (
    <div className="start-modal">
      <label htmlFor="user-name">Username: </label>
      <input type="text" id="user-name" />
      <h2>Find all the characters as quickly as you can!</h2>
      <p>You will be timed when you click start</p>
      <button onClick={startGame}>Start</button>
    </div>
  );
};

export default StartGameModal;
