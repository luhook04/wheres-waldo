import React from "react";
import Game from "./components/Game";
import StartGameModal from "./components/StartGameModal";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Game />
      <StartGameModal />
    </div>
  );
};

export default App;
