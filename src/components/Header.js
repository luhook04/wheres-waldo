import React from "react";
import GameStats from "./GameStats";

const Header = ({ remainingCharacters }) => {
  return (
    <div>
      <h1>Where's Waldo?</h1>
      <GameStats />
    </div>
  );
};

export default Header;
