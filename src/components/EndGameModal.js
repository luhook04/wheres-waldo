import React from "react";

const EndGameModal = ({ gameResult }) => {
  return (
    <div className="end-container">
      <h3>
        {gameResult.username}: {gameResult.secondsTaken} seconds
      </h3>
    </div>
  );
};

export default EndGameModal;
