import React, { useState } from "react";
import "./App.css";
import StartGameModal from "./components/StartGameModal";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";
import odlawPic from "./imgs/odlaw.jpeg";
import waldoPic from "./imgs/waldocharacter.webp";
import wendaPic from "./imgs/wenda.webp";
import whiteBeardPic from "./imgs/whitebeard.webp";

const App = () => {
  const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
  const [ modalInformation, setmodalInformation ] = useState({
    x    : 0,
    y    : 0,
    show : false
  });
  const [ characterInfo, setCharacterInfo ] = useState({});
  const [ remainingCharacters, setRemainingCharacters ] = useState([
    {
      name  : "Waldo",
      image : waldoPic
    },
    {
      name  : "Odlaw",
      image : odlawPic
    },
    {
      name  : "Wenda",
      image : wendaPic
    },
    {
      name  : "Whitebeard",
      image : whiteBeardPic
    }
  ]);

  const getCoords = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    const xCoords = Math.round(offsetX / width * 100);
    const yCoords = Math.round(offsetY / height * 100);
    console.log({ x: xCoords, y: yCoords });
    setMousePosition({ x: xCoords, y: yCoords });
  };

  const toggleModal = (e) => {
    setmodalInformation({
      x    : e.pageX,
      y    : e.pageY,
      show : !modalInformation.show
    });
  };

  const handleClick = (e) => {
    toggleModal(e);
    getCoords(e);
    console.dir(e.target.parentNode.children[0]);
  };

  return (
    <div className="App">
      <Header remainingCharacters={remainingCharacters} />
      <GameContainer
        handleClick={handleClick}
        remainingCharacters={remainingCharacters}
        modalInformation={modalInformation}
        mousePosition={mousePosition}
      />
      <StartGameModal />
    </div>
  );
};

export default App;
