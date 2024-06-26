import express from "express";
import cors from "cors";

const port = 3000;

const app = express();
app.use(cors());
app.get("/api/verification-assure", (req, res) => {
  res.status(200).json({ message: "Vous etes assure(e)" });
});

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
