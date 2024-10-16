import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pg from "../../assets/audio/kuis/pagelaranwayang.mp3";
import pg1 from "../../assets/image/kuis/pg1.png";
import pg2 from "../../assets/image/kuis/pg2.png";
import pg3 from "../../assets/image/kuis/pg3.png";
import pg4 from "../../assets/image/kuis/pg4.png";
const SwaraNglegena = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showHomeButton, setShowHomeButton] = useState(false);
  const navigate = useNavigate();

  const song = {
    audioSrc: pg,
    correctAnswer: "option4",
    options: [
      { id: "option1", imgSrc: pg2 },
      { id: "option2", imgSrc: pg3 },
      { id: "option3", imgSrc: pg4 },
      { id: "option4", imgSrc: pg1 },
    ],
  };
  const playAudio = () => {
    const audio = new Audio(song.audioSrc);
    audio.play();
    setIsPlaying(true);

    // Stop audio after it's finished playing
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
    navigate("/aksaranglegena/kuis1");
  };
  return (
    <div className="sound-match-game">
      <h1>Nyocokake Swara 1</h1>

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

export default SwaraNglegena;
