import "./board.css";

import blueflask from "/src/assets/blueflask.png";
import redflask from "/src/assets/redflask.png";
import bluevile from "/src/assets/bluevile.png";
import redvile from "/src/assets/redvile.png";
import diamond from "/src/assets/diamond.png";
import coin from "/src/assets/coin.png";

import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Card from "../components/card/Card";
import Modal from "../components/modal/Modal";

const Board = () => {
  let [cards, setCards] = useState([]);
  let [moves, setMoves] = useState(0);
  let [matched, setMatched] = useState(0);

  let [firstcard, setFirstcard] = useState(null);
  let [secondcard, setSecondcard] = useState(null);

  const cardslist = [
    {
      src: blueflask,
      matched: false,
    },
    {
      src: redflask,
      matched: false,
    },
    {
      src: bluevile,
      matched: false,
    },
    {
      src: redvile,
      matched: false,
    },
    {
      src: coin,
      matched: false,
    },
    {
      src: diamond,
      matched: false,
    },
  ];

  const shuffleCards = () => {
    setCards(() => {
      return [...cardslist, ...cardslist]
        .sort(() => {
          return Math.random() - 0.5;
        })
        .map((card) => {
          return { ...card, id: Math.random() };
        });
    });
    setMoves(0);
    setMatched(0);
  };

  const handleClick = (card) => {
    // console.log("clicked");

    // firstcard?setSecondcard(card):setFirstcard(card);
    if (firstcard) {
      setSecondcard(card);
      // console.log("second card set");
    } else {
      setFirstcard(card);
      // console.log("first card set");
    }
    console.log(matched);
  };

  const resetTurn = () => {
    setFirstcard(null);
    setSecondcard(null);
    setMoves((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    if (firstcard && secondcard) {
      if (firstcard.id !== secondcard.id) {
        if (firstcard.src === secondcard.src) {
          console.log("they match");
          setMatched((prev) => {
            return prev + 1;
          });
          setCards((prev) => {
            return prev.map((each) => {
              if (each.src === firstcard.src) {
                return { ...each, matched: true };
              } else {
                return each;
              }
            });
          });
        } else {
          console.log("they dont match");
        }
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [firstcard, secondcard]);

  return (
    <div className="board">
      <Header shuffleCards={shuffleCards} />

      {matched === 6 && <Modal shuffleCards={shuffleCards} />}

      <div className="moves_contain">
        <p className="moves">Moves Played : {moves}</p>
      </div>

      <div className="game_contain">
        <div className="card_contain">
          {cards.map((card) => {
            return (
              <Card
                card={card}
                key={card.id}
                handleClick={handleClick}
                flipped={
                  card === firstcard || card === secondcard || card.matched
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
