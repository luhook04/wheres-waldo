import React from "react";
import waldoPic from "../imgs/waldo.jpeg";

//add padding on the div and not on the image

const GameContainer = ({ getCoords }) => {
  return (
    <div>
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
