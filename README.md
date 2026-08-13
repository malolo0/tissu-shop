# Tissu Shop

Boutique en ligne de vente de tissus, avec un espace client (catalogue, panier, commandes)
et un espace admin pour gérer les produits et le suivi des commandes.

## Stack

- **Frontend** : React (Vite)
- **Backend** : Node.js / Express
- **Base de données** : MongoDB (Mongoose)
- **Auth** : JWT (client / admin)

## Structure du projet

```
tissu-shop/
├── backend/     # API Express + MongoDB
└── frontend/    # Application React (Vite)
```

## Démarrage

### Backend

```bash
cd backend
cp .env.example .env   # puis renseigner MONGODB_URI
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Le frontend tourne sur `http://localhost:5173` et proxy les appels `/api` vers le
backend sur `http://localhost:5000`.

## Avancement

- [x] Étape 1 — Setup & architecture
- [ ] Étape 2 — Modèle de données & API produits
- [ ] Étape 3 — Catalogue côté client
- [ ] Étape 4 — Authentification
- [ ] Étape 5 — Panier & commandes
- [ ] Étape 6 — Espace admin
- [ ] Étape 7 — Paiement (optionnel)
- [ ] Étape 8 — Déploiement
