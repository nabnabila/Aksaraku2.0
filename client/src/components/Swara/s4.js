import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sht from "../../assets/audio/kuis/sanghyangtunggal.mp3";
import sht1 from "../../assets/image/kuis/sht1.png";
import sht2 from "../../assets/image/kuis/sht2.png";
import sht3 from "../../assets/image/kuis/sht3.png";
import sht4 from "../../assets/image/kuis/sht4.png";
const SwaraMurda = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showHomeButton, setShowHomeButton] = useState(false);
  const navigate = useNavigate();

  // audio data
  const song = {
    audioSrc: sht,
    correctAnswer: "option2",
    options: [
      { id: "option1", imgSrc: sht2 },
      { id: "option2", imgSrc: sht1 },
      { id: "option3", imgSrc: sht3 },
      { id: "option4", imgSrc: sht4 },
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
    navigate("/aksaramurda/kuis3");
  };

  return (
    <div className="sound-match-game">
      <h1>Nyocokake Swara 4</h1>

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

export default SwaraMurda;
