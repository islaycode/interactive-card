import React from "react";
import "./Card.css";
import BackCard from "../assets/bg-card-back.png";
const CardBack = ({ cvv }) => {
  return (
    <div className="cardBack">
      {/* <div className="cardBack"></div> */}
      <img src={BackCard} alt="card-back" />
      <div className="cvv">{cvv}</div>
    </div>
  );
};

export default CardBack;
