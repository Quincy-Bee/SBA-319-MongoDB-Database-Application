import express from "express";

import Contact from "../models/Contact.js";
import Call from "../models/Call.js";
import Appointment from "../models/Appointment.js";

import { contacts, calls, appointments } from "../data/data.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    await Contact.deleteMany();
    await Call.deleteMany();
    await Appointment.deleteMany();

    await Contact.insertMany(contacts);
    await Call.insertMany(calls);
    await Appointment.insertMany(appointments);

    res.json({
      message: "Database seeded successfully"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

export default router;