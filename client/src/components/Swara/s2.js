import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tr from "../../assets/audio/kuis/teaterrakyat.m4a";
import tr1 from "../../assets/image/kuis/tr1.png";
import tr2 from "../../assets/image/kuis/tr2.png";
import tr3 from "../../assets/image/kuis/tr3.png";
import tr4 from "../../assets/image/kuis/tr4.png";
import "../../style/SoundMatchGame.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Swara = ({ nextPagePath }) => {
  const navigate = useNavigate();
  const originalSong = [
    {
      audioSrc: tr,
      correctAnswer: "option2",
      options: [
        { id: "option1", imgSrc: tr2 },
        { id: "option2", imgSrc: tr1 },
        { id: "option3", imgSrc: tr3 },
        { id: "option4", imgSrc: tr4 },
      ],
    },
  ];

  const [shuffledSong] = useState(
    originalSong.map((song) => ({
      options: shuffleArray([...song.options]),
    }))
  );

  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [timer, setTimer] = useState(null);
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);

  useEffect(() => {
    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, [timer]);

  const playAudio = () => {
    const audio = new Audio(originalSong[0].audioSrc);
    audio.play();
    setIsPlaying(true);
    setElapsedTime(0);

    // Start timer
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1000); // Increment time every second
    }, 1000);
    setTimer(interval);

    audio.onended = () => {
      setIsPlaying(false);
      // Don't stop the timer here
    };
  };

  const handleChoiceClick = (optionId) => {
    if (selectedAnswer) return; // Prevent clicking if an answer is already selected

    setSelectedAnswer(optionId);

    if (optionId === originalSong[0].correctAnswer) {
      setIsAnswerCorrect(true);
      const calculatedScore = calculateScore(elapsedTime);
      setScore(calculatedScore);
      clearInterval(timer); // Stop the timer only if the answer is correct
      setIsPopupVisible(true); // Show popup after selecting the correct answer
    } else {
      setIsAnswerCorrect(false);
      // Allow retry by resetting the selected answer after a short delay
      setTimeout(() => {
        setSelectedAnswer(null);
        setIsAnswerCorrect(null);
      }, 1000); // 1 second delay for feedback visibility
    }
  };

  const calculateScore = (duration) => {
    return Math.max(0, 100 - Math.floor(duration / 1000) * 1); // Score based on seconds
  };

  const handlePopupAction = (action) => {
    setIsPopupVisible(false);
    if (action === "next") {
      navigate(nextPagePath, { replace: true });
    } else {
      navigate("/games/swara");
    }
  };

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    return `${seconds} detik`;
  };
  const closeInstructionPopup = () => {
    setIsInstructionVisible(false);
  };

  return (
    <div className="sound-match-game">
      {isInstructionVisible && (
        <div className="sound-instruction-popup">
          <h2>Tata Cara Bermain</h2>
          <p>Tekan tombol untuk memulai audio</p>
          <p>Pilih aksara yang sesuai dengan audio</p>
          <p>Nilai ditentukan dari berapa lama anda menyelesaikan permainan</p>
          <button onClick={closeInstructionPopup}>Close</button>
        </div>
      )}
      <h1>Nyocokake Swara 2</h1>
      <div className="play-button-container">
        <button
          className="play-button"
          onClick={playAudio}
          disabled={isPlaying}
        >
          <i className="play-icon"></i>
        </button>
      </div>

      <div className="image-options">
        {shuffledSong[0].options.map((option) => (
          <img
            key={option.id}
            src={option.imgSrc}
            alt={`Option ${option.id}`}
            onClick={() => handleChoiceClick(option.id)}
            className={`image-option ${
              selectedAnswer === option.id ? "selected" : ""
            }`}
          />
        ))}
      </div>
      {/* Display elapsed time */}
      <div className="timer">
        <h3>Waktu: {formatTime(elapsedTime)}</h3>
      </div>
      {isAnswerCorrect !== null && (
        <p className={`feedback-message ${isAnswerCorrect ? "" : "incorrect"}`}>
          {isAnswerCorrect ? "Bener!" : "Coba Maneh Yok!"}
        </p>
      )}

      {isPopupVisible && (
        <div className="sound-popup">
          <h2>Nilai: {score}</h2>
          <p>Kerja Bagus!</p>
          <button
            className="song-popup-button"
            onClick={() => handlePopupAction("back")}
          >
            Kembali
          </button>
          <button
            className="song-popup-button"
            onClick={() => handlePopupAction("next")}
          >
            Level Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
};

export default Swara;
