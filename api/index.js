import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcryptjs from "bcryptjs";

import User from "./models/User.js";

const port = 8000;

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

try {
  mongoose.connect(process.env.DB_URL, () => {
    console.log("Connected to MongoDB...");
  });
} catch (error) {
  console.log("Error connecting MongoDB!...", err);
}

app.get("/api/verification-assure", (req, res) => {
  res.status(200).json({ message: "Vous etes assure(e)" });
});

app.post("/api/signup", async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res
      .status(404)
      .json({ message: "Username, Email and the password are required" });
  }
  //const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: password,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "Sign-Up Successful" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erreur interne du server", error });
  }
});
app.post("/api/sign-in", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(404)
      .json({ message: "Email and the password are required" });
  }

  try {
    const newUser = await User.findOne({ email });
    if (!newUser) {
      return res.status(404).json({ message: "Email not found..." });
    }
    if (newUser.password !== password) {
      return res.status(401).json({ message: "Wrong password ..." });
    }
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Erreur interne du server", error });
  }
});

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
