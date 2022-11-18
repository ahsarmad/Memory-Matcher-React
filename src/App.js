import { useState } from "react";
import cece from "./assets/cece.jpg";
import coach from "./assets/coach.jpeg";
import nick from "./assets/nick.jpg";
import jess from "./assets/jess.jpg";
import winston from "./assets/winston.jpeg";
import schmidt from "./assets/schmidt.jpg";
import cast1 from "./assets/cast1.jpg";
import cast2 from "./assets/cast2.jpg";
import cast3 from "./assets/cast3.jpg";
import cast4 from "./assets/cast4.jpeg";

import "./App.css";

//
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
  const shuffle = () => {
    const isShuffled = [...cardCategories, ...cardCategories]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(isShuffled);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Test Your Memory!</h1>
      <button onClick={shuffle}> New Game</button>
      <div className="card-placement">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="card-face" src={card.src} alt="card-front" />
              <img className="card-back" src={cast4} alt="card-back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
