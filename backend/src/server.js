import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import healthRoutes from "./routes/health.routes.js";

dotenv.config();

const app = express();

// Middlewares globaux
app.use(cors());            // autorise le frontend (autre port) à appeler l'API
app.use(express.json());    // permet de lire le JSON envoyé dans les requêtes

// Routes
app.use("/api/health", healthRoutes);
// TODO: routes produits, auth, commandes...

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Serveur backend démarré sur http://localhost:${PORT}`);
  });
}

start();
