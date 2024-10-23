import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sht1 from "../../assets/image/kuis/sanghyangtunggal1.png";
import sht2 from "../../assets/image/kuis/sanghyangtunggal2.png";
import sht3 from "../../assets/image/kuis/sanghyangtunggal3.png";
import sht4 from "../../assets/image/kuis/sanghyangtunggal4.png";
import sht5 from "../../assets/image/kuis/sanghyangtunggal5.png";

// Shuffle function
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

const NgaturUkara = ({ nextPagePath }) => {
  const navigate = useNavigate();

  const question = "Tatanen aksarane supaya dadi tembung 'Sang Hyang Tunggal'";
  const images = [
    { id: 1, src: sht1, isCorrect: true },
    { id: 2, src: sht2, isCorrect: true },
    { id: 3, src: sht3, isCorrect: false },
    { id: 4, src: sht4, isCorrect: false },
    { id: 5, src: sht5, isCorrect: false },
  ];

  const [shuffledImages, setShuffledImages] = useState(
    shuffleArray([...images])
  );
  const [userArrangement, setUserArrangement] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timer, setTimer] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);

  // Start timer
  const startTimer = () => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1000);
    }, 1000);
    setTimer(interval);
  };

  // Handle image click
  function handleImageClick(image) {
    if (!userArrangement.includes(image)) {
      setUserArrangement((prev) => [...prev, image]);
      if (userArrangement.length === 0) startTimer(); // Start timer on first click
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
      setFeedback("Bener!");
      const calculatedScore = calculateScore(elapsedTime);
      setScore(calculatedScore);
      clearInterval(timer); // Stop the timer on correct answer
      setIsPopupVisible(true); // Show popup
    } else {
      setFeedback("Coba Maneh Yuk!");
      // Allow retry
      setUserArrangement([]); // Reset user arrangement on incorrect
    }
  }

  // Calculate score based on elapsed time
  const calculateScore = (duration) => {
    return Math.max(0, 100 - Math.floor(duration / 1000) * 1); // Score based on seconds
  };

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
  function handlePopupAction(action) {
    setIsPopupVisible(false);
    if (action === "next") {
      navigate(nextPagePath);
    } else {
      navigate("/games/ngaturukara");
    }
  }

  // Format elapsed time
  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    return `${seconds} detik`;
  };
  // Cleanup timer on component unmount
  useEffect(() => {
    return () => clearInterval(timer);
  }, [timer]);
  const closeInstructionPopup = () => {
    setIsInstructionVisible(false);
  };

  return (
    <div className="arrangewords">
      {isInstructionVisible && (
        <div className="ukara-instruction-popup">
          <h2>Tata Cara Bermain</h2>
          <p>
            Atur aksara hingga menjadi rangkaian aksara sesuai dengan kalimat
            yang tertera
          </p>
          <p>Tidak semua aksara diperlukan untuk membentuk rangkaiannya</p>
          <p>
            Anda bisa melakukan pengecekan untuk mengetahui apakah yang aksara
            yang diatur sudah benar dengan menekan tombol "cek urutan"
          </p>
          <p>Nilai ditentukan dari berapa lama anda menyelesaikan permainan</p>
          <button onClick={closeInstructionPopup}>Close</button>
        </div>
      )}
      <h1 className="arrangewords-header">Ngatur Ukara 4</h1>
      <p className="arrangewords-question-text">{question}</p>
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
        <button onClick={reshuffleImages}>Acak Gambar</button>
      </div>
      {/* Display elapsed time */}
      <div className="timer">
        <h3>Waktu: {formatTime(elapsedTime)}</h3>
      </div>
      {feedback && <p className="feedback">{feedback}</p>}

      {isPopupVisible && (
        <div className="ukara-popup">
          <h2>Nilai: {score}</h2>
          <p>Waktu: {formatTime(elapsedTime)}</p>
          <button
            className="ukara-popup-button"
            onClick={() => handlePopupAction("back")}
          >
            Kembali
          </button>
          <button
            className="ukara-popup-button"
            onClick={() => handlePopupAction("next")}
          >
            Level Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
};

export default NgaturUkara;
