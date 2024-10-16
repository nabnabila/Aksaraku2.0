import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import wk from "../../assets/image/kuis/wayangkulit1.png";
import wk1 from "../../assets/image/kuis/wayangkulit.jpg";
import wkl from "../../assets/image/kuis/wayangklithik.jpg";
import ww from "../../assets/image/kuis/wayangwong.jpg";
import wg from "../../assets/image/kuis/wayanggolek.jpg";
import "../../style/ImageMatch.css";

const NyocokakeGambar = ({ nextPagePath }) => {
  const navigate = useNavigate();

  const pairs = [
    {
      clueImage: wk,
      options: [
        { id: 1, image: ww, isCorrect: false },
        { id: 2, image: wg, isCorrect: false },
        { id: 3, image: wk1, isCorrect: true },
        { id: 4, image: wkl, isCorrect: false },
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
        <h1 className="image-clue-container-header">Nyocokake Gambar 1</h1>
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
