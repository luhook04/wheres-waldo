import React from "react";
import StartGameModal from "./components/StartGameModal";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <GameContainer />
      <StartGameModal />
    </div>
  );
};

export default App;
