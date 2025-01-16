import React from "react";
import "./cards.css";
import card1 from "../../assets/card1.jpg";
import card2 from "../../assets/card2.jpg";
import card3 from "../../assets/card3.jpg";
import card4 from "../../assets/card4.jpg";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <img src={card1} alt="Electric" className="card-image" />
        <div className="card-title">Electric</div>
      </div>
      <div className="card">
        <img src={card2} alt="Gas" className="card-image" />
        <div className="card-title">Gas</div>
      </div>
      <div className="card">
        <img
          src={card3}
          alt="Freestanding"
          className="card-image"
        />
        <div className="card-title">Freestanding</div>
      </div>
      <div className="card">
        <img src={card4} alt="Mounted" className="card-image" />
        <div className="card-title">Mounted</div>
      </div>
    </div>
  );
};

export default Cards;