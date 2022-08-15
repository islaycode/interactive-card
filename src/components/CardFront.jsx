import React, { useEffect } from "react";
import "./Card.css";
import FrontCard from "../assets/bg-card-front.png";
import logo from "../assets/card-logo.svg";

const CardFront = ({ cardNumber, mm, yy, holderName }) => {
  useEffect(() => {}, [holderName, mm, yy, cardNumber]);
  return (
    <>
      <div className="cardFront">
        <h2 className="cardNumber">{cardNumber}</h2>
        <div className="holderName">{holderName}</div>
        <div className="expiry">
          {mm}/{yy}
        </div>
        <img src={logo} alt="card-logo" className="cardLogo" />
        <img src={FrontCard} alt="card-front" />
      </div>
    </>
  );
};

export default CardFront;
