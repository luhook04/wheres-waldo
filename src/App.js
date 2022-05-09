import React, { useState } from "react";
import StartGameModal from "./components/StartGameModal";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";
import odlawPic from "./imgs/odlaw.jpeg";
import waldoPic from "./imgs/waldocharacter.webp";
import wendaPic from "./imgs/wenda.webp";
import whiteBeardPic from "./imgs/whitebeard.webp";

const App = () => {
  const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });
  const [ characterInfo, setCharacterInfo ] = useState({});
  const [ remainingCharacters, setRemainingCharacters ] = useState([
    {
      name  : "Waldo",
      image : { waldoPic }
    },
    {
      name  : "Odlaw",
      image : { odlawPic }
    },
    {
      name  : "Wenda",
      image : { wendaPic }
    },
    {
      name  : "Whitebeard",
      image : { whiteBeardPic }
    }
  ]);

  const getCoords = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    const xCoords = Math.round(offsetX / width * 100);
    const yCoords = Math.round(offsetY / height * 100);
    console.log(xCoords);
    console.log(yCoords);

    setMousePosition({ x: xCoords, y: yCoords });
  };

  return (
    <div className="App">
      <Header remainingCharacters={remainingCharacters} />
      <GameContainer
        getCoords={getCoords}
        remainingCharacters={remainingCharacters}
      />
      <StartGameModal />
    </div>
  );
};

export default App;
