import { useState } from "react";
import "./App.css";

//
const cardCategories = [
  { src: "./assets/cece.jpg" },
  { src: "./assets/coach.jpg" },
  { src: "./assets/jess.jpg" },
  { src: "./assets/winston.jpg" },
  { src: "./assets/nick.jpg" },
  { src: "./assets/schmidt.jpg" },
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
    </div>
  );
}

export default App;
