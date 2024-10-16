import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ebb from "../../assets/audio/kuis/empritabuntutbedhug.mp3";
import ebb1 from "../../assets/image/kuis/eab1.png";
import ebb2 from "../../assets/image/kuis/eab2.png";
import ebb3 from "../../assets/image/kuis/eab3.png";
import ebb4 from "../../assets/image/kuis/eab4.png";
const SwaraPasanganNglegena = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showHomeButton, setShowHomeButton] = useState(false);
  const navigate = useNavigate();

  const song = {
    audioSrc: ebb,
    correctAnswer: "option2",
    options: [
      { id: "option1", imgSrc: ebb4 },
      { id: "option3", imgSrc: ebb1 },
      { id: "option2", imgSrc: ebb3 },
      { id: "option4", imgSrc: ebb2 },
    ],
  };

  const playAudio = () => {
    const audio = new Audio(song.audioSrc);
    audio.play();
    setIsPlaying(true);

    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  const handleChoiceClick = (optionId) => {
    setSelectedAnswer(optionId);
    if (optionId === song.correctAnswer) {
      setFeedback("Bener!");
      setShowHomeButton(true);
    } else {
      setFeedback("Coba Maneh Yok!");
    }
  };
  const goToHomePage = () => {
    navigate("/pasanganaksaranglegena/kuis2");
  };

  return (
    <div className="sound-match-game">
      <h1>Nyocokake Swara 3</h1>

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
        {song.options.map((option) => (
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

      {feedback && <p className="feedback">{feedback}</p>}
      {showHomeButton && (
        <button className="home-button" onClick={goToHomePage}>
          Kembali Ke Kuis
        </button>
      )}
    </div>
  );
};

export default SwaraPasanganNglegena;
