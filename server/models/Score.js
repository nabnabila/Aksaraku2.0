import mongoose from "mongoose";

const scoreSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  score: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Score = mongoose.model("Score", scoreSchema);
export default Score;
