import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import glb from "../../assets/audio/kuis/garenglanbagong.mp3";
import glb1 from "../../assets/image/kuis/glb1.png";
import glb2 from "../../assets/image/kuis/glb2.png";
import glb3 from "../../assets/image/kuis/glb3.png";
import glb4 from "../../assets/image/kuis/glb4.png";

const SwaraPasanganMurda = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showHomeButton, setShowHomeButton] = useState(false);
  const navigate = useNavigate();

  // audio data
  const song = {
    audioSrc: glb,
    correctAnswer: "option2",
    options: [
      { id: "option1", imgSrc: glb1 },
      { id: "option2", imgSrc: glb2 },
      { id: "option3", imgSrc: glb3 },
      { id: "option4", imgSrc: glb4 },
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
    navigate("/pasanganaksaramurda/kuis4");
  };

  return (
    <div className="sound-match-game">
      <h1>Nyocokake Swara 5</h1>

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

export default SwaraPasanganMurda;
