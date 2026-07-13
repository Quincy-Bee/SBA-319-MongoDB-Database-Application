import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },

    lastName: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    phone: {
      type: String,
      required: true
    },

    neighborhood: {
      type: String,
      required: true
    },

    status: {
      type: String,
      enum: ["lead", "client", "closed"],
      default: "lead"
    }
  },
  {
    timestamps: true
  }
);

contactSchema.index({ neighborhood: 1 });

export default mongoose.model("Contact", contactSchema);