import mongoose from "mongoose";

// Connexion à MongoDB via l'URI dans .env
// Séparé de server.js pour garder ce dernier lisible
export async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri);
    console.log("✅ Connecté à MongoDB");
  } catch (error) {
    console.error("❌ Erreur de connexion à MongoDB :", error.message);
    // pas la peine de laisser tourner le serveur sans DB
    process.exit(1);
  }
}
