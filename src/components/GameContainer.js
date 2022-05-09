import React from "react";
import waldoPic from "../imgs/waldo.jpeg";
// import Selector from "./Selector";

//add padding on the div and not on the image

const GameContainer = ({ getCoords, remainingCharacters }) => {
  return (
    <div>
      {/* <Selector remainingCharacters={remainingCharacters} /> */}
      <img
        onClick={getCoords}
        src={waldoPic}
        alt="waldo"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default GameContainer;
