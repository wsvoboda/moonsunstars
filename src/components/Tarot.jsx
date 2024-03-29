import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTarotCards } from "../actions/tarot-actions";
import TarotReading from "../components/TarotReading";
import cardgif from "../assets/shuffle.gif";
import "../App.css";
import tarotJson from "../assets/tarot-images.json";

export default function Tarot() {
  const dispatch = useDispatch();
  const tarot = useSelector((state) => state.tarot);

  const dealCards = () => {
    let shuffledCards = tarotJson.cards.sort(() => Math.random() - 0.5);
    let dealtCards = shuffledCards.slice(0, 3);
    getTarotCards(dispatch, dealtCards);
  };

  return (
    <div>
      <h1>Tarot Card Reading</h1>
      {tarot.length > 1 ? (
        <TarotReading deal={tarot} />
      ) : (
        <div>
          <h2>Think of a question you want answered</h2>
          <h3>Shuffling...</h3>
          <img src={cardgif} alt="shuffling" />
          <p></p>
        </div>
      )}
      <button className="buttons" onClick={() => dealCards()}>
        Deal Cards
      </button>
    </div>
  );
}
