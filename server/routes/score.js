import express from "express";
import Score from "../models/Score.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, score } = req.body;
  const newScore = new Score({ userId, score });

  try {
    await newScore.save();
    res.status(201).json(newScore);
  } catch (error) {
    res.status(500).json({ error: "Gagal menyimpan nilai" });
  }
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const scores = await Score.find({ userId });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: "gagal mendapatkan nilai" });
  }
});

router.get("/", async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 });
    res.json(scores);
  } catch (error) {
    res.status(500).json({ error: "gagal mendapatkan nilai" });
  }
});

export default router;
