import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sht1 from "../../assets/image/kuis/sanghyangtunggal1.png";
import sht2 from "../../assets/image/kuis/sanghyangtunggal2.png";
import sht3 from "../../assets/image/kuis/sanghyangtunggal3.png";
import sht4 from "../../assets/image/kuis/sanghyangtunggal4.png";
import sht5 from "../../assets/image/kuis/sanghyangtunggal5.png";

const question = "Tatanen aksarane supaya dadi tembung 'Sang Hyang Tunggal'";
const images = [
  { id: 1, src: sht1, isCorrect: true },
  { id: 2, src: sht2, isCorrect: true },
  { id: 3, src: sht3, isCorrect: false },
  { id: 4, src: sht4, isCorrect: false },
  { id: 5, src: sht5, isCorrect: false },
];

function NgaturUkara() {
  const [shuffledImages, setShuffledImages] = useState(
    shuffleArray([...images])
  );
  const [userArrangement, setUserArrangement] = useState([]);
  const [feedback, setFeedback] = useState(null); // Feedback state
  const navigate = useNavigate(); // Initialize useNavigate

  // Shuffle function
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Handle image click
  function handleImageClick(image) {
    if (!userArrangement.includes(image)) {
      setUserArrangement((prev) => [...prev, image]);
    }
  }

  // Handle rearrangement
  function handleRearrange(index, newIndex) {
    const updatedArrangement = [...userArrangement];
    const [movedImage] = updatedArrangement.splice(index, 1);
    updatedArrangement.splice(newIndex, 0, movedImage);
    setUserArrangement(updatedArrangement);
  }

  // Check the arrangement
  function checkArrangement() {
    const correctOrder = images.filter((img) => img.isCorrect);
    if (
      JSON.stringify(userArrangement.map((img) => img.id)) ===
      JSON.stringify(correctOrder.map((img) => img.id))
    ) {
      setFeedback("Bener!"); // Correct feedback
    } else {
      setFeedback("Coba Maneh Yuk!"); // Incorrect feedback
    }
  }

  // Clear the user's selection
  function clearSelection() {
    setUserArrangement([]);
  }

  // Reshuffle the images
  function reshuffleImages() {
    setShuffledImages(shuffleArray([...images]));
    clearSelection();
  }

  // Navigate to the next page
  function goToNextPage() {
    navigate("/aksaramurda/kuis3/utakatikgathukmurda"); // Use navigate instead of history.push
  }

  return (
    <div className="arrangewords">
      <h1 className="arrangewords-header">Ngatur Ukara 4</h1>
      <p className="arrangewords-question-text">{question}</p>{" "}
      {/* Styled question */}
      <div className="arrangewords-image-list">
        {shuffledImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            onClick={() => handleImageClick(image)}
            className="image"
            style={{
              cursor: "pointer",
              opacity: userArrangement.includes(image) ? 0.5 : 1,
            }}
          />
        ))}
      </div>
      <div className="arrangewords-user-arrangement">
        {userArrangement.map((image, index) => (
          <div
            key={index}
            className="arrangewords-arranged-image"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) =>
              handleRearrange(e.dataTransfer.getData("text/plain"), index)
            }
          >
            <img
              src={image.src}
              alt={`User Arrangement ${index}`}
              className="arrangewords-arranged-image-img"
            />
          </div>
        ))}
      </div>
      <div className="arrangewords-buttons">
        <button onClick={checkArrangement}>Cek Urutan</button>
        <button onClick={clearSelection}>Hapus Pilihan</button>
        <button onClick={reshuffleImages}>Acak gambar</button>
      </div>
      {feedback && <p className="feedback">{feedback}</p>}{" "}
      {/* Feedback display */}
      {feedback === "Bener!" && <button onClick={goToNextPage}>Lanjut</button>}
    </div>
  );
}

export default NgaturUkara;
