import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import seedRoute from "./routes/seed.js";
import contactRoutes from "./routes/contacts.js";

import callRoutes from "./routes/calls.js";
import appointmentRoutes from "./routes/appointments.js";

dotenv.config();

const app = express();

app.use(express.json());

connectDB();


app.use("/seed", seedRoute);
app.use("/contacts", contactRoutes);
app.use("/calls", callRoutes);
app.use("/appointments", appointmentRoutes);


app.get("/", (req, res) => {
  res.send("SBA 319 MongoDB Database Application API");
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});