import React, { useState } from "react";
import "./App.css";
import StartGameModal from "./components/StartGameModal";
import Header from "./components/Header";
import GameContainer from "./components/GameContainer";
import odlawPic from "./imgs/odlaw.jpeg";
import waldoPic from "./imgs/waldocharacter.webp";
import wendaPic from "./imgs/wenda.webp";
import whiteBeardPic from "./imgs/whitebeard.webp";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "./firebase/firebase.config";

const App = () => {
  const [ gameStart, setGameStart ] = useState(false);
  const [ gameEnd, setGameEnd ] = useState(false);
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

  const characterPos = {
    Waldo      : "SzcX1kUhIspzXiLf0m0D",
    Odlaw      : "xQSTsPX254yZr1ewpWoU",
    Wenda      : "Phpjg7dfgLQnzaylEnL4",
    Whitebeard : "GLodc7DOiU3qd0nMroYg"
  };

  const getCoords = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    const xCoords = Math.round(offsetX / width * 100);
    const yCoords = Math.round(offsetY / height * 100);
    console.log({ x: xCoords, y: yCoords });
    setMousePosition({ x: xCoords, y: yCoords });
  };

  const getModalInfo = (e) => {
    setmodalInformation({
      x    : e.pageX,
      y    : e.pageY,
      show : !modalInformation.show
    });
  };

  const handleClick = (e) => {
    getModalInfo(e);
    getCoords(e);
  };

  const toggleModal = () => {
    modalInformation.show = !modalInformation.show;
    setmodalInformation({ ...modalInformation });
  };

  const makeMove = () => {};

  const checkPosition = async (e) => {
    const name = e.target.firstChild.textContent;
    const characterId = characterPos[name];
    const characterRef = doc(db, "locations", characterId);
    const charSnap = await getDoc(characterRef);
    const [ x, y ] = [
      charSnap.data()["x-cord"],
      charSnap.data()["y-cord"]
    ];
    isInArea(x, y) ? foundCharacter() : wrongSelection();
  };

  const isInArea = (userX, userY) => {
    const distance = Math.sqrt(
      (mousePosition.x - userX) ** 2 + (mousePosition.y - userY) ** 2
    );
    return distance < 8 ? true : false;
  };

  const foundCharacter = () => {
    toggleModal();
    console.log("You found him");
  };

  const wrongSelection = () => {
    toggleModal();
    console.log("Not there idiot");
  };

  return (
    <div className="App">
      <Header remainingCharacters={remainingCharacters} />
      <GameContainer
        handleClick={handleClick}
        remainingCharacters={remainingCharacters}
        modalInformation={modalInformation}
        mousePosition={mousePosition}
        checkPosition={checkPosition}
      />
      <StartGameModal />
    </div>
  );
};

export default App;
