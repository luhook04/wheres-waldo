import React from "react";

const EndGameModal = ({ gameResult }) => {
  return (
    <div className="end-container">
      <h2>Congratulations {gameResult.username}</h2>
      <h3>Your time was {gameResult.secondsTaken}</h3>
      <button>View Leaderboards</button>
    </div>
  );
};

export default EndGameModal;
