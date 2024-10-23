import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import lakon from "../../assets/image/kuis/lakon.png";
import sutradara from "../../assets/image/kuis/sutradara.png";
import dalang from "../../assets/image/kuis/dalang.png";
import sindhen from "../../assets/image/kuis/sindhen.png";

const NggolekiTembang3 = ({ nextPagePath }) => {
  const navigate = useNavigate();
  const initialClues = [
    { word: "LAKON", image: lakon },
    { word: "SUTRADARA", image: sutradara },
    { word: "DALANG", image: dalang },
    { word: "SINDHEN", image: sindhen },
  ];

  const [gridSize, setGridSize] = useState(15);
  const [grid, setGrid] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [score, setScore] = useState(0);
  const [isInstructionVisible, setIsInstructionVisible] = useState(true);

  useEffect(() => {
    const newGrid = createEmptyGrid();
    placeWordsInGrid(newGrid);
    fillGridWithRandomLetters(newGrid);
    setGrid(newGrid);
    startTimer();

    return () => clearInterval(timerRef.current); // Cleanup on unmount
  }, [gridSize]);

  const createEmptyGrid = () => {
    return Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => "")
    );
  };

  const placeWordsInGrid = (grid) => {
    initialClues.forEach((clue) => {
      const word = clue.word;
      let placed = false;
      while (!placed) {
        const direction = Math.floor(Math.random() * 3);
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);

        if (canPlaceWord(word, row, col, direction, grid)) {
          placeWord(word, row, col, direction, grid);
          placed = true;
        }
      }
    });
  };

  const canPlaceWord = (word, row, col, direction, grid) => {
    if (direction === 0 && col + word.length > gridSize) return false; // Horizontal
    if (direction === 1 && row + word.length > gridSize) return false; // Vertical
    if (
      direction === 2 &&
      (row + word.length > gridSize || col + word.length > gridSize)
    )
      return false; // Diagonal

    for (let i = 0; i < word.length; i++) {
      const currentRow = row + (direction === 1 || direction === 2 ? i : 0);
      const currentCol = col + (direction === 0 || direction === 2 ? i : 0);
      if (
        grid[currentRow][currentCol] !== "" &&
        grid[currentRow][currentCol] !== word[i]
      ) {
        return false;
      }
    }
    return true;
  };

  const placeWord = (word, row, col, direction, grid) => {
    for (let i = 0; i < word.length; i++) {
      const currentRow = row + (direction === 1 || direction === 2 ? i : 0);
      const currentCol = col + (direction === 0 || direction === 2 ? i : 0);
      grid[currentRow][currentCol] = word[i];
    }
  };

  const fillGridWithRandomLetters = (grid) => {
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (grid[row][col] === "") {
          grid[row][col] = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
        }
      }
    }
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setElapsedTime((prev) => prev + 1000);
    }, 1000);
  };

  const handleCellClick = (row, col) => {
    const cellIndex = selectedCells.findIndex(
      (cell) => cell.row === row && cell.col === col
    );

    if (cellIndex !== -1) {
      const newSelection = [...selectedCells];
      newSelection.splice(cellIndex, 1);
      setSelectedCells(newSelection);
    } else {
      setSelectedCells([...selectedCells, { row, col }]);
    }
  };

  const clearSelection = () => {
    setSelectedCells([]);
  };

  useEffect(() => {
    const selectedWord = selectedCells
      .map(({ row, col }) => grid[row][col])
      .join("");

    // Check if the selected word matches any clue
    const foundClue = initialClues.find((clue) => clue.word === selectedWord);

    if (foundClue && !foundWords.includes(foundClue.word)) {
      setFoundWords((prev) => [...prev, foundClue.word]);
      setSelectedCells([]);
    }
  }, [selectedCells]);

  const allWordsFound = foundWords.length === initialClues.length;

  const calculateScore = (duration) => {
    return Math.max(0, 100 - Math.floor(duration / 1000) * 0.2);
  };

  useEffect(() => {
    if (allWordsFound) {
      clearInterval(timerRef.current); // Stop the timer when all words are found
      const calculatedScore = calculateScore(elapsedTime);
      setScore(calculatedScore);
      setIsPopupVisible(true); // Show popup
    }
  }, [allWordsFound, elapsedTime]);

  const handlePopupAction = (action) => {
    setIsPopupVisible(false);
    if (action === "next") {
      navigate(nextPagePath);
    } else {
      navigate("/games/nggolekitembung");
    }
  };
  const closeInstructionPopup = () => {
    setIsInstructionVisible(false);
  };
  return (
    <div className="wordsearch">
      {isInstructionVisible && (
        <div className="search-instruction-popup">
          <h2>Tata Cara Bermain</h2>
          <p>
            Carilah kata dalam kumpulan huruf sesuai dengan yang aksara
            ditampilkan
          </p>
          <p>Kata dapat ditemukan secara horizontal, vertical, dan diagonal</p>
          <p>Nilai ditentukan dari berapa lama anda menyelesaikan permainan</p>
          <button onClick={closeInstructionPopup}>Close</button>
        </div>
      )}
      <h1>Nggoleki Tembung 1</h1>
      <h2>Goleki tembung sing cocog karo aksara sing ditampilake</h2>

      <div className="wordsearch-clues">
        {initialClues.map((clue, index) => (
          <div key={index} className="wordsearch-clue">
            <img
              className="wordsearch-clue-image"
              src={clue.image}
              alt={clue.word}
              style={{ width: "20px" }}
            />
          </div>
        ))}
      </div>

      <div className="wordsearch-container">
        <div className="wordsearch-grid" style={{ "--grid-size": gridSize }}>
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="wordsearch-row">
              {row.map((letter, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell ${
                    selectedCells.find(
                      (c) => c.row === rowIndex && c.col === colIndex
                    )
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>
        <button onClick={clearSelection}>Hapus Pilihan</button>

        <div className="wordsearch-found-words">
          <h2>Tembung:</h2>
          {foundWords.map((word, index) => (
            <span key={index} style={{ marginRight: "10px" }}>
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Timer display */}
      <div className="timer">
        <h3>Waktu: {Math.floor(elapsedTime / 1000)} detik</h3>
      </div>

      {/* Popup for score */}
      {isPopupVisible && (
        <div className="search-popup">
          <h2>Nilai: {score}</h2>
          <button
            className="search-popup-button"
            onClick={() => handlePopupAction("back")}
          >
            Kembali
          </button>
          <button
            className="search-popup-button"
            onClick={() => handlePopupAction("next")}
          >
            Level Selanjutnya
          </button>
        </div>
      )}
    </div>
  );
};

export default NggolekiTembang3;
