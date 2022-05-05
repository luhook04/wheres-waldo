import React, { useState } from "react";
import StartGameModal from "./components/StartGameModal";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";

const App = () => {
  const [ mousePosition, setMousePosition ] = useState({ x: 0, y: 0 });

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
      <Header />
      <GameContainer getCoords={getCoords} />
      <StartGameModal />
    </div>
  );
};

export default App;
