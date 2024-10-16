import express from "express";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
const router = express.Router();

// Create a new user
router.post("/daftar", async (req, res) => {
  const { email, password } = req.body;

  try {
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(409).json({ message: "User Sudah Terdaftar" });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 8);
    const newuser = new User({ email, password: hashedPassword });

    await newuser.save();
    res.status(201).json({ message: "User Berhasil Dibuat" });
  } catch (error) {
    res.status(500).json({ message: "Error Saat Pendaftaran", error });
  }
});

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

    res.status(200).json({ message: "Masuk Berhasil" });
  } catch (error) {
    res.status(500).json({ message: "Error Saat Masuk", error });
  }
});

export default router;
