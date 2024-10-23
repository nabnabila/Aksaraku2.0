import express from "express";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid"; // Import uuid
const router = express.Router();

// Create a new user
router.post("/daftar", async (req, res) => {
  const { email, password } = req.body;
  const userId = uuidv4(); // Generate a unique ID

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User Sudah Terdaftar" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = new User({ email, password: hashedPassword, userId });

    await newUser.save();
    res.status(201).json({ message: "User Berhasil Dibuat", userId });
  } catch (error) {
    res.status(500).json({ message: "Error Saat Pendaftaran", error });
  }
});

// User login
router.post("/masuk", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email Salah" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password Salah" });
    }

    res.status(200).json({ message: "Masuk Berhasil", userId: user.userId }); // Include userId in response
  } catch (error) {
    res.status(500).json({ message: "Error Saat Masuk", error });
  }
});

export default router;
