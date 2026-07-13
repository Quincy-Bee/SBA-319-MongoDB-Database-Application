import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import seedRoute from "./routes/seed.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/seed", seedRoute);

app.get("/", (req, res) => {
  res.send("SBA 319 MongoDB Database Application API");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});