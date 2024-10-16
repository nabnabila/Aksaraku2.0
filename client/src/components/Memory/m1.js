import ha from "../../assets/image/aksara1/ha.png";
import ra from "../../assets/image/aksara1/ra.png";
import sa from "../../assets/image/aksara1/sa.png";
import ya from "../../assets/image/aksara1/ya.png";
import ba from "../../assets/image/aksara1/ba.png";
import ja from "../../assets/image/aksara1/ja.png";
import cover1 from "../../assets/image/Nglegena.png";
import { useEffect, useState } from "react";
import "../../style/memorycard.css";

function MemoryGames1() {
  const cardImage = [
    { image: ha },
    { image: ra },
    { image: sa },
    { image: ya },
    { image: ba },
    { image: ja },
  ];

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [flippedCards, setFlippedCards] = useState([]);

  const shuffleCards = () => {
    const shuffledCards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    setFlippedCards([]);
  };

  const handleClick = (card) => {
    if (flippedCards.includes(card.id) || choiceTwo) return;
    if (choiceOne) {
      setChoiceTwo(card);
      setFlippedCards((prev) => [...prev, card.id]);
    } else {
      setChoiceOne(card);
      setFlippedCards((prev) => [...prev, card.id]);
    }
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.image === choiceTwo.image) {
        resetTurn();
      } else {
        setTimeout(() => {
          setFlippedCards((prev) =>
            prev.filter((id) => id !== choiceOne.id && id !== choiceTwo.id)
          );
          resetTurn();
        }, 1000); //
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <div className="card-header">
      <h1 className="card-title">Memory 1</h1>
      <button className="card-click-button" onClick={shuffleCards}>
        Atur Kartu
      </button>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-image">
              {flippedCards.includes(card.id) ? (
                <img src={card.image} alt="card front" />
              ) : (
                <img
                  src={cover1}
                  onClick={() => handleClick(card)}
                  alt="cover"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemoryGames1;
