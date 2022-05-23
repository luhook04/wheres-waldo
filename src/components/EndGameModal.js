import React from "react";
import Leaderboard from "./Leaderboard";

const EndGameModal = ({ gameResult, handleHomeClick }) => {
  return (
    <div className="end-modal">
      <h2>Congratulations {gameResult.username}!</h2>
      <h3>Your time was {gameResult.secondsTaken} seconds</h3>
      <Leaderboard handleHomeClick={handleHomeClick} />
    </div>
  );
};

export default EndGameModal;
