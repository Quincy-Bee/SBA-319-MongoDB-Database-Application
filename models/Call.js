import mongoose from "mongoose";

const callSchema = new mongoose.Schema(
  {
    contactName: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    notes: {
      type: String,
      required: true
    },

    outcome: {
      type: String,
      enum: ["interested", "not interested", "follow up"],
      default: "follow up"
    },

    callDate: {
      type: Date,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Call", callSchema);