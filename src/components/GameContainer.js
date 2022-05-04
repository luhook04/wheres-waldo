import React from "react";
import waldoPic from "../imgs/waldo.jpeg";

const GameContainer = () => {
  return (
    <div>
      <img srcSet={waldoPic} src={waldoPic} alt="waldo" />
    </div>
  );
};

export default GameContainer;
