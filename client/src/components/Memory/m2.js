import suku from "../../assets/image/aksara5/suku.png";
import cakra from "../../assets/image//aksara5/cakra.png";
import panjinganla from "../../assets/image/aksara5/panjinganla.png";
import taling from "../../assets/image/aksara5/taling.png";
import pepet from "../../assets/image/aksara5/pepet.png";
import panjinganwa from "../../assets/image/aksara5/panjinganwa.png";
import cover1 from "../../assets/image/Nglegena.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/memorycard.css";

const MemoryGames2 = ({ nextPagePath }) => {
  const navigate = useNavigate();
  const cardImage = [
    { image: suku },
    { image: cakra },
    { image: panjinganla },
    { image: panjinganwa },
    { image: pepet },
    { image: taling },
  ];

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [flippedCards, setFlippedCards] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);

  const shuffleCards = () => {
    const shuffledCards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    setFlippedCards([]);
    setElapsedTime(0);
    setScore(0);
    setIsPopupVisible(false);
    startTimer(); // Start the timer when shuffling
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
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);

    // Check if all cards are flipped
    if (flippedCards.length === cards.length) {
      clearInterval(timer); // Stop the timer
      calculateScore(); // Calculate score when all pairs are found
    }
  };

  const startTimer = () => {
    const newTimer = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);
    setTimer(newTimer);
  };

  const calculateScore = () => {
    const timePenalty = Math.floor(elapsedTime * 2);
    const turnPenalty = turns * 2;
    const finalScore = Math.max(0, 500 - timePenalty - turnPenalty);

    setScore(finalScore);
    setIsPopupVisible(true);
  };

  const handlePopupAction = (action) => {
    setIsPopupVisible(false);
    if (action === "next") {
      navigate(nextPagePath);
    } else {
      navigate("/games/memory");
    }
  };

  useEffect(() => {
    return () => clearInterval(timer); // Cleanup on unmount
  }, [timer]);

  const closeInstructionPopup = () => {
    setIsInstructionVisible(false);
  };

  return (
    <div className="card-header">
      {isInstructionVisible && (
        <div className="memory-instruction-popup">
          <h2>Tata Cara Bermain</h2>
          <p>Tekan tombol atur kartu untuk memulai</p>
          <p>Cari pasangan dari tiap kartu yang anda buka</p>
          <p>
            Nilai ditentukan dari berapa lama anda menyelesaikan permainan dan
            banyaknya kartu yang dibuka
          </p>
          <button onClick={closeInstructionPopup}>Close</button>
        </div>
      )}
      <h1 className="card-title">ngeling-eling 2</h1>
      <button className="card-click-button" onClick={shuffleCards}>
        Atur Kartu
      </button>
      <div className="timer">
        <h3>Waktu: {elapsedTime} detik</h3>
      </div>
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

      {/* Popup for score */}
      {isPopupVisible && (
        <div className="memory-popup">
          <h2>Nilai: {score}</h2>
          <button
            className="memory-popup-button"
            onClick={() => handlePopupAction("back")}
          >
            Kembali
          </button>
          <button
            className="memory-popup-button"
            onClick={() => handlePopupAction("next")}
          >
            Level Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
};

export default MemoryGames2;
