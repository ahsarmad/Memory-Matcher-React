import { useState } from "react";
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

  const handleChoice = (card) => {
    console.log(card);
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
