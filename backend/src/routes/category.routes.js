import express from "express";
import Category from "../models/Category.js";

const router = express.Router();

// GET /api/categories - lister toutes les catégories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ nom: 1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
});

// GET /api/categories/:id - récupérer une catégorie précise
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Catégorie introuvable" });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
});

// POST /api/categories - créer une nouvelle catégorie
router.post("/", async (req, res) => {
  try {
    const { nom, description } = req.body;
    const category = new Category({ nom, description });
    const saved = await category.save();
    res.status(201).json(saved);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: "Cette catégorie existe déjà" });
    }
    res.status(400).json({ message: "Données invalides", error: err.message });
  }
});

// PUT /api/categories/:id - modifier une catégorie
router.put("/:id", async (req, res) => {
  try {
    const { nom, description } = req.body;
    const updated = await Category.findByIdAndUpdate(
      req.params.id,
      { nom, description },
      { new: true, runValidators: true }
    );
    if (!updated) {
      return res.status(404).json({ message: "Catégorie introuvable" });
    }
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: "Données invalides", error: err.message });
  }
});

// DELETE /api/categories/:id - supprimer une catégorie
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Catégorie introuvable" });
    }
    res.json({ message: "Catégorie supprimée" });
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
  }
});

export default router;