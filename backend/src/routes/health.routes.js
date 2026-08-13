import { Router } from "express";

const router = Router();

// Route de "health check" pour vérifier que l'API répond
// (utile en dev et pour l'hébergeur plus tard au déploiement)
router.get("/", (req, res) => {
  res.json({ status: "ok", message: "API tissu-shop opérationnelle" });
});

export default router;
