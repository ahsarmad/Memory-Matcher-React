import { useEffect, useState } from "react";
import "./App.css";
import CardItem from "./components/cardItem";

import cece from "./assets/cece.jpg";
import coach from "./assets/coach.jpeg";
import nick from "./assets/nick.jpg";
import jess from "./assets/jess.jpg";
import winston from "./assets/winston.jpeg";
import schmidt from "./assets/schmidt.jpg";

const cardCategories = [
  { src: cece },
  { src: coach },
  { src: jess },
  { src: nick },
  { src: winston },
  { src: schmidt },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);

  const shuffle = () => {
    const isShuffled = [...cardCategories, ...cardCategories]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(isShuffled);
    setTurns(0);
  };
  // handle choice made by user
  const handleChoice = (card) => {
    firstPick ? setSecondPick(card) : setFirstPick(card);
  };

  // compare the user selected choices
  useEffect(() => {
    if (firstPick && secondPick) {
      if (firstPick.src === secondPick.src) {
        console.log("you have a match!");
        resetTurn();
      } else {
        console.log("you do not have no match");
        resetTurn();
      }
    }
  }, [firstPick, secondPick]);

  // reset the choices
  const resetTurn = () => {
    setFirstPick(null);
    setSecondPick(null);
  };

  return (
    <div className="App">
      <h1>Test Your Memory!</h1>
      <div className="card-placement">
        {cards.map((card) => (
          <CardItem key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
      <button onClick={shuffle}> New Game</button>
    </div>
  );
}

export default App;
