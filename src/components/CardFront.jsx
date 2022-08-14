import React from "react";
import "./Card.css";
import FrontCard from '../assets/bg-card-front.png'
import logo from '../assets/card-logo.svg';

const CardFront = () => {
  return (
    <>
      <div className="cardFront">
        <h2 className="cardNumber">9102 3313 1223 123E</h2>
        <div className="holderName">flecia leire</div>
        <div className="expiry">00/12</div>
        <img src={logo} alt="card-logo" className="cardLogo" />
        <img src={FrontCard} alt="card-front"/>
      </div>
    </>
  );
};

export default CardFront;
