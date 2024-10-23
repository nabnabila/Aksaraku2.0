import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/user.js";

dotenv.config({ path: "./server/.env" });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRouter);

const mongouri =
  "mongodb+srv://nabilaindhy:nabnabila@aksaraa.klhzv.mongodb.net/?retryWrites=true&w=majority&appName=aksaraa";

// MongoDB connection
mongoose
  .connect(mongouri)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
