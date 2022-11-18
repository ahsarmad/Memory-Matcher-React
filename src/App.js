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
  { src: cece, matched: false },
  { src: coach, matched: false },
  { src: jess, matched: false },
  { src: nick, matched: false },
  { src: winston, matched: false },
  { src: schmidt, matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [unavailable, setUnavailable] = useState(false);

  //shuffle the cards
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
      setUnavailable(true);
      if (firstPick.src === secondPick.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstPick.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1500);
      }
    }
  }, [firstPick, secondPick]);

  console.log(cards);

  // reset the choices
  const resetTurn = () => {
    setFirstPick(null);
    setSecondPick(null);
    setUnavailable(false);
  };

  return (
    <div className="App">
      <h1>Test Your Memory!</h1>
      <div className="card-placement">
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === firstPick || card === secondPick || card.matched}
            unavailable={unavailable}
          />
        ))}
      </div>
      <button onClick={shuffle}> New Game</button>
    </div>
  );
}

export default App;
