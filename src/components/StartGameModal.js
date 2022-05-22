import React from "react";

const StartGameModal = ({ startGame, updateName }) => {
  return (
    <div className="start-modal">
      <label htmlFor="user-name">Username: </label>
      <input type="text" onChange={updateName} id="user-name" />
      <h2>Find all the characters as quickly as you can!</h2>
      <p>You will be timed when you click start</p>
      <div>
        <button onClick={startGame}>Start</button>
        <button>Leaderboard</button>
      </div>
    </div>
  );
};

export default StartGameModal;
