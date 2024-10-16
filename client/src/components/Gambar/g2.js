import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import kb from "../../assets/image/kuis/kancilbaya.png";
import kke from "../../assets/image/kuis/kancilkeong.png";
import kk from "../../assets/image/kuis/kancilkethek.png";
import kt from "../../assets/image/kuis/kanciltani.png";
import kk1 from "../../assets/image/kuis/kancilkethek1.png";
import "../../style/ImageMatch.css";

const NyocokakeGambar = ({ nextPagePath }) => {
  const navigate = useNavigate();

  const pairs = [
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

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const currentPair = pairs[currentPairIndex];

  const handleImageClick = (option) => {
    setSelectedImage(option.id);
    setIsAnswerCorrect(option.isCorrect);
  };

  const handleNext = () => {
    if (currentPairIndex < pairs.length - 1) {
      setSelectedImage(null);
      setIsAnswerCorrect(null);
      setCurrentPairIndex(currentPairIndex + 1);
    } else {
      navigate(nextPagePath);
    }
  };

  return (
    <div className="image-cover">
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
            {isAnswerCorrect && (
              <button className="image-next-button" onClick={handleNext}>
                Lanjut
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NyocokakeGambar;
