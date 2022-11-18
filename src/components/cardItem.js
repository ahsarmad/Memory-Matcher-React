import "./cardItem.css";
import cast4 from "../assets/cast4.jpeg";

import React from "react";

export default function CardItem({ card, handleChoice, flipped }) {
  const handlePress = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="face" src={card.src} alt="card-front" />
        <img
          className="back"
          src={cast4}
          alt="card-back"
          onClick={handlePress}
        />
      </div>
    </div>
  );
}
