import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// GET /api/products - lister les produits (avec filtre optionnel par catégorie)
router.get("/", async (req, res) => {
  try {
    const filtre = {};
    if (req.query.categorie) {
      filtre.categorie = req.query.categorie;
    }
    if (req.query.actif !== undefined) {
      filtre.actif = req.query.actif === "true";
    }
    const products = await Product.find(filtre)
      .populate("categorie", "nom")
      .sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
});

// GET /api/products/:id - récupérer un produit précis
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("categorie", "nom");
    if (!product) {
      return res.status(404).json({ message: "Produit introuvable" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
});

// POST /api/products - créer un nouveau produit
router.post("/", async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: "Données invalides", error: err.message });
  }
});

// PUT /api/products/:id - modifier un produit
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("categorie", "nom");
    if (!updated) {
      return res.status(404).json({ message: "Produit introuvable" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Données invalides", error: err.message });
  }
});

// DELETE /api/products/:id - supprimer un produit
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Produit introuvable" });
    }
    res.json({ message: "Produit supprimé" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
});

export default router;