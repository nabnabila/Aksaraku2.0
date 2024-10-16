import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tr from "../../assets/audio/kuis/teaterrakyat.mp3";
import tr1 from "../../assets/image/kuis/tr1.png";
import tr2 from "../../assets/image/kuis/tr2.png";
import tr3 from "../../assets/image/kuis/tr3.png";
import tr4 from "../../assets/image/kuis/tr4.png";
const SwaraSandhangan = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showHomeButton, setShowHomeButton] = useState(false);
  const navigate = useNavigate();

  // audio data
  const song = {
    audioSrc: tr,
    correctAnswer: "option2",
    options: [
      { id: "option1", imgSrc: tr2 },
      { id: "option2", imgSrc: tr1 },
      { id: "option3", imgSrc: tr3 },
      { id: "option4", imgSrc: tr4 },
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
    navigate("/sandhangan/kuis5");
  };

  return (
    <div className="sound-match-game">
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

export default SwaraSandhangan;
