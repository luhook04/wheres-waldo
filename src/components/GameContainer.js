import React from "react";
import waldoPic from "../imgs/waldo.jpeg";
import Selector from "./Selector";

//add padding on the div and not on the image

const GameContainer = ({
  handleClick,
  remainingCharacters,
  modalInformation,
  mousePosition,
  checkPosition
}) => {
  return (
    <div className="image-container">
      <Selector
        modalInformation={modalInformation}
        remainingCharacters={remainingCharacters}
        mousePosition={mousePosition}
        checkPosition={checkPosition}
      />
      <img
        className="gameboard"
        onClick={handleClick}
        src={waldoPic}
        alt="waldo"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default GameContainer;
