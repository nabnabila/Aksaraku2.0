import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import kb from "../../assets/image/kuis/kancilbaya.png";
import kke from "../../assets/image/kuis/kancilkeong.png";
import kk from "../../assets/image/kuis/kancilkethek.png";
import kt from "../../assets/image/kuis/kanciltani.png";
import kk1 from "../../assets/image/kuis/kancilkethek1.png";
import "../../style/ImageMatch.css";

// Shuffle function to shuffle everytime the page is open
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const NyocokakeGambar = ({ nextPagePath }) => {
  const navigate = useNavigate();
  const originalPairs = [
    {
      clueImage: kk1,
      options: [
        { id: 1, image: kb, isCorrect: false },
        { id: 2, image: kke, isCorrect: false },
        { id: 3, image: kt, isCorrect: false },
        { id: 4, image: kk, isCorrect: true },
      ],
    },
  ];
  // State for shuffled pairs, initialized only once everytime the game starts
  const [shuffledPairs, setShuffledPairs] = useState(
    originalPairs.map((pair) => ({
      clueImage: pair.clueImage,
      options: shuffleArray([...pair.options]), // Shuffle options for each pair
    }))
  );

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);

  const currentPair = shuffledPairs[currentPairIndex];

  // Stopwatch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1000);
    }, 1000);
    setTimer(interval);

    return () => clearInterval(interval);
  }, []);

  const handleImageClick = async (option) => {
    setSelectedImage(option.id);
    setIsAnswerCorrect(option.isCorrect);
    if (option.isCorrect) {
      //stop time if correct option is chosen
      clearInterval(timer);
      if (currentPairIndex < shuffledPairs.length - 1) {
        setSelectedImage(null);
        setIsAnswerCorrect(null);
        setCurrentPairIndex(currentPairIndex + 1);
      } else {
        //shows score
        const finalElapsedTime = elapsedTime / 1000;
        const calculatedScore = calculateScore(finalElapsedTime);
        setFinalScore(calculatedScore);
        setIsPopupVisible(true);
      }
    }
  };
  //score logic
  const calculateScore = (duration) => {
    return Math.max(0, 100 - Math.floor(duration * 1));
  };
  //page navigation
  const handlePopupAction = (action) => {
    setIsPopupVisible(false);
    if (action === "next") {
      navigate(nextPagePath);
    } else {
      navigate("/games/gambar");
    }
  };

  const closeInstructionPopup = () => {
    setIsInstructionVisible(false);
  };

  return (
    <div className="image-cover">
      {isInstructionVisible && (
        <div className="image-instruction-popup">
          <h2>Tata Cara Bermain</h2>
          <p>Pilih gambar yang sesuai dengan aksara yang diberikan.</p>
          <p>Setelah memilih gambar yang benar, anda akan mendapatkan nilai</p>
          <p>Nilai ditentukan dari berapa lama anda menyelesaikan permainan</p>
          <button onClick={closeInstructionPopup}>Close</button>
        </div>
      )}
      <div className="image-clue-container">
        <h1 className="image-clue-container-header">Nyocokake Gambar 2</h1>
        <h2 className="image-clue-container-header1">
          Pilih gambar sing cocog karo aksara
        </h2>
        <img
          src={currentPair.clueImage}
          alt="Clue"
          className="image-clue-image"
        />
        <div className="option image-container">
          {currentPair.options.map((option) => (
            <div key={option.id} className="option-image-container">
              <img
                src={option.image}
                alt="Option"
                className={selectedImage === option.id ? "selected" : ""}
                onClick={() => handleImageClick(option)}
              />
            </div>
          ))}
        </div>
        {isAnswerCorrect !== null && (
          <div>
            <p
              className={`feedback-message ${
                isAnswerCorrect ? "" : "incorrect"
              }`}
            >
              {isAnswerCorrect ? "Bener!" : "Coba Maneh Yok!"}
            </p>
          </div>
        )}
      </div>

      <div className="image-score-container">
        <h3>Waktu: {elapsedTime / 1000} detik</h3>
      </div>

      {isPopupVisible && (
        <div className="image-popup">
          <h2>Nilai: {finalScore}</h2>
          <p>Kerja Bagus!</p>
          <button
            className="image-popup-button"
            onClick={() => handlePopupAction("back")}
          >
            Kembali
          </button>
          <button
            className="image-popup-button"
            onClick={() => handlePopupAction("next")}
          >
            Level Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
};

export default NyocokakeGambar;
