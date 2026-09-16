import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: [true, "Le nom du produit est requis"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    prix: {
      type: Number,
      required: [true, "Le prix est requis"],
      min: [0, "Le prix ne peut pas être négatif"],
    },
    unite: {
      type: String,
      enum: ["metre", "piece"],
      default: "metre",
    },
    categorie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "La catégorie est requise"],
    },
    couleur: {
      type: String,
      trim: true,
      default: "",
    },
    quantiteEnStock: {
      type: Number,
      required: true,
      min: [0, "La quantité ne peut pas être négative"],
      default: 0,
    },
    image: {
      type: String,
      default: "",
    },
    actif: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);