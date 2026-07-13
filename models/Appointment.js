import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    contactName: {
      type: String,
      required: true
    },

    appointmentType: {
      type: String,
      enum: ["showing", "consultation", "inspection"],
      required: true
    },

    location: {
      type: String,
      required: true
    },

    date: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Appointment", appointmentSchema);