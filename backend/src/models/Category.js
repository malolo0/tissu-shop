import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: [true, "Le nom de la catégorie est requis"],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);