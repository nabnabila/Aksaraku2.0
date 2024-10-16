import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import eb1 from "../../assets/image/kuis/empritabuntutbedhug1.png";
import eb2 from "../../assets/image/kuis/empritabuntutbedhug2.png";
import eb3 from "../../assets/image/kuis/empritabuntutbedhug3.png";
import eb4 from "../../assets/image/kuis/empritabuntutbedhug4.png";
import eb5 from "../../assets/image/kuis/empritabuntutbedhug5.png";

const question = "Tatanen aksarane supaya dadi tembung 'Emprit Abuntut Bedhug'";
const images = [
  { id: 1, src: eb1, isCorrect: true },
  { id: 2, src: eb2, isCorrect: true },
  { id: 3, src: eb3, isCorrect: true },
  { id: 4, src: eb4, isCorrect: false },
  { id: 5, src: eb5, isCorrect: false },
];

function NgaturUkara() {
  const [shuffledImages, setShuffledImages] = useState(
    shuffleArray([...images])
  );
  const [userArrangement, setUserArrangement] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function handleImageClick(image) {
    if (!userArrangement.includes(image)) {
      setUserArrangement((prev) => [...prev, image]);
    }
  }

  function handleRearrange(index, newIndex) {
    const updatedArrangement = [...userArrangement];
    const [movedImage] = updatedArrangement.splice(index, 1);
    updatedArrangement.splice(newIndex, 0, movedImage);
    setUserArrangement(updatedArrangement);
  }

  function checkArrangement() {
    const correctOrder = images.filter((img) => img.isCorrect);
    if (
      JSON.stringify(userArrangement.map((img) => img.id)) ===
      JSON.stringify(correctOrder.map((img) => img.id))
    ) {
      setFeedback("Bener!");
    } else {
      setFeedback("Coba Maneh Yuk!");
    }
  }

  function clearSelection() {
    setUserArrangement([]);
  }

  function reshuffleImages() {
    setShuffledImages(shuffleArray([...images]));
    clearSelection();
  }

  function goToNextPage() {
    navigate("/pasanganaksaranglegena/kuis2/utakatikgathukpasangannglegena"); // Use navigate instead of history.push
  }

  return (
    <div className="arrangewords">
      <h1 className="arrangewords-header"> Ngatur Ukara 3</h1>
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
        <button onClick={reshuffleImages}>Atur Gambar</button>
      </div>
      {feedback && <p className="feedback">{feedback}</p>}{" "}
      {/* Feedback display */}
      {feedback === "Bener!" && <button onClick={goToNextPage}>Lanjut</button>}
    </div>
  );
}

export default NgaturUkara;
