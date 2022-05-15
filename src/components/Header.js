import React from "react";

const Header = ({ remainingCharacters }) => {
  const characterBoxes = remainingCharacters.map((character, index) => {
    return (
      <div className="character-container" key={index}>
        <img src={character.image} alt={character.name} />
        <p>{character.name}</p>
      </div>
    );
  });

  return (
    <div>
      <h1>Where's Waldo?</h1>
      <h3>Find Us!</h3>
      <div className="remaining-character-grid">{characterBoxes}</div>
    </div>
  );
};

export default Header;
