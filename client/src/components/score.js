import React, { useState } from "react";
import axios from "axios";

const ScoreForm = () => {
  const [userId, setUserId] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/score", {
        userId,
        score: parseInt(score),
      });
      console.log("Nilai masuk:", response.data);
      setUserId("");
      setScore("");
    } catch (error) {
      console.error("Nilai gagal masuk", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
      />
      <button type="submit">Submit Score</button>
    </form>
  );
};

export default ScoreForm;
