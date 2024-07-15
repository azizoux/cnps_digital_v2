import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import testRouter from "./routes/test.route.js";
import authRouter from "./routes/auth.route.js";

const port = 8000;

const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());

app.use("/api/test", testRouter);
app.use("/api/auth", authRouter);

mongoose
  .connect(process.env.DB_LOCAL)
  .then(() => console.log("DB connected..."))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
