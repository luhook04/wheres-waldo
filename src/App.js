import React, { useState, useEffect } from 'react';
import './App.css';
import StartGameModal from './components/StartGameModal';
import EndGameModal from './components/EndGameModal';
import Header from './components/Header';
import GameContainer from './components/GameContainer';
import Leaderboard from './components/Leaderboard';
import Feedback from './components/Feedback';
import odlawPic from './imgs/odlaw.jpeg';
import waldoPic from './imgs/waldocharacter.jpeg';
import wendaPic from './imgs/wenda.jpeg';
import whiteBeardPic from './imgs/whitebeard.jpeg';
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
import { db } from './firebase/firebase.config';

const App = () => {
  const [showStartModal, setShowStartModal] = useState(true);
  const [startGame, setStartGame] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [endGameModal, setEndGameModal] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successPopup, setSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [username, setUsername] = useState('');
  const [userId, setUserId] = useState('');
  const [gameResult, setGameResult] = useState();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [modalInformation, setmodalInformation] = useState({
    x: 0,
    y: 0,
    show: false,
  });
  const [remainingCharacters, setRemainingCharacters] = useState([
    {
      name: 'Waldo',
      image: waldoPic,
    },
    {
      name: 'Odlaw',
      image: odlawPic,
    },
    {
      name: 'Wenda',
      image: wendaPic,
    },
    {
      name: 'Whitebeard',
      image: whiteBeardPic,
    },
  ]);

  const characterPos = {
    Waldo: 'SzcX1kUhIspzXiLf0m0D',
    Odlaw: 'xQSTsPX254yZr1ewpWoU',
    Wenda: 'Phpjg7dfgLQnzaylEnL4',
    Whitebeard: 'GLodc7DOiU3qd0nMroYg',
  };

  useEffect(() => {
    const endGame = async () => {
      await setEndTime();

      const userRef = doc(db, 'timing', userId);
      const userDoc = await getDoc(userRef).then((res) => res.data());
      const { startTime, endTime, username } = userDoc;
      const secondsTaken = Math.round(endTime - startTime);
      setGameResult({ username, secondsTaken });
      setEndGameModal(true);
      setStartGame(false);
    };

    const setEndTime = async () => {
      const userRef = doc(db, 'timing', userId);
      await updateDoc(userRef, {
        endTime: serverTimestamp(),
      })
        .then(() => console.log('success'))
        .catch((err) => console.log(err));
    };

    if (remainingCharacters.length === 0) {
      endGame();
    }
  }, [remainingCharacters, userId]);

  useEffect(() => {
    if (errorPopup) {
      setTimeout(() => {
        setErrorPopup(false);
      }, 1000);
    }
  }, [errorPopup]);

  useEffect(() => {
    if (successPopup) {
      setTimeout(() => {
        setSuccessPopup(false);
      }, 1000);
    }
  }, [successPopup]);

  const updateName = (e) => {
    setUsername(e.target.value);
  };

  const resetGame = () => {
    setUserId('');
    setGameResult();
    setUsername('');
    setRemainingCharacters([
      {
        name: 'Waldo',
        image: waldoPic,
      },
      {
        name: 'Odlaw',
        image: odlawPic,
      },
      {
        name: 'Wenda',
        image: wendaPic,
      },
      {
        name: 'Whitebeard',
        image: whiteBeardPic,
      },
    ]);
    handleHomeClick();
  };

  const getCoords = (e) => {
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    const xCoords = Math.round((offsetX / width) * 100);
    const yCoords = Math.round((offsetY / height) * 100);

    setMousePosition({ x: xCoords, y: yCoords });
  };

  const getModalInfo = (e) => {
    setmodalInformation({
      x: e.pageX,
      y: e.pageY,
      show: !modalInformation.show,
    });
  };

  const handleClick = (e) => {
    getModalInfo(e);
    getCoords(e);
  };

  const handleHomeClick = () => {
    setShowLeaderboard(false);
    setEndGameModal(false);
    setShowStartModal(true);
  };

  const toggleModal = () => {
    modalInformation.show = !modalInformation.show;
    setmodalInformation({ ...modalInformation });
  };

  const toggleError = () => {
    setErrorPopup(true);
  };

  const toggleSuccess = () => {
    setSuccessPopup(true);
  };

  const checkPosition = async (e) => {
    const name = e.target.firstChild.textContent;
    const characterId = characterPos[name];
    const characterRef = doc(db, 'locations', characterId);
    const charSnapshot = await getDoc(characterRef);
    const [x, y] = [
      charSnapshot.data()['x-cord'],
      charSnapshot.data()['y-cord'],
    ];
    isInArea(x, y) ? foundCharacter(name) : wrongSelection(name);
  };

  const isInArea = (xCord, yCord) => {
    const distance = Math.sqrt(
      (mousePosition.x - xCord) ** 2 + (mousePosition.y - yCord) ** 2
    );
    return distance < 6 ? true : false;
  };

  const foundCharacter = (character) => {
    const newArray = remainingCharacters.filter((obj) => {
      return obj.name !== character;
    });
    toggleModal();
    setRemainingCharacters(newArray);
    setSuccessMessage(`You found ${character}!`);
    toggleSuccess();
  };

  const wrongSelection = (name) => {
    toggleModal();
    setErrorMessage(`${name} is not there`);
    toggleError();
  };

  const toggleStartGame = () => {
    if (username.length < 3 || username.length > 15) {
      alert('You must enter a username between 3-15 letters');
      return;
    }
    setShowStartModal(!showStartModal);
    setStartGame(true);
    timeUser();
  };

  const timeUser = async () => {
    addDoc(collection(db, 'timing'), {
      username: username,
      startTime: serverTimestamp(),
      endTime: null,
    })
      .then((res) => {
        setUserId(res.id);
        console.log('timer started');
      })
      .catch((err) => console.log(err));
  };

  const toggleLeaderboard = () => {
    setShowStartModal(false);
    setShowLeaderboard(!showLeaderboard);
  };

  return (
    <div className="App">
      <Header remainingCharacters={remainingCharacters} />
      <Feedback
        successMessage={successMessage}
        successPopup={successPopup}
        errorMessage={errorMessage}
        errorPopup={errorPopup}
        modalInformation={modalInformation}
        mousePosition={mousePosition}
      />
      {showStartModal ? (
        <StartGameModal
          toggleStartGame={toggleStartGame}
          updateName={updateName}
          toggleLeaderboard={toggleLeaderboard}
        />
      ) : null}
      {startGame ? (
        <GameContainer
          handleClick={handleClick}
          remainingCharacters={remainingCharacters}
          modalInformation={modalInformation}
          mousePosition={mousePosition}
          checkPosition={checkPosition}
        />
      ) : null}
      {endGameModal ? (
        <EndGameModal
          gameResult={gameResult}
          handleHomeClick={handleHomeClick}
          resetGame={resetGame}
        />
      ) : null}
      {showLeaderboard ? (
        <div className="leaderboard-container">
          <Leaderboard resetGame={resetGame} />
        </div>
      ) : null}
    </div>
  );
};

export default App;
