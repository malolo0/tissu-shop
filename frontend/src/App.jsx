import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  // état temporaire pour tester la connexion au backend
  // à remplacer par le vrai catalogue à l'étape 3
  const [apiStatus, setApiStatus] = useState("Connexion à l'API...");

  useEffect(() => {
    axios
      .get("/api/health")
      .then((res) => setApiStatus(res.data.message))
      .catch(() => setApiStatus("❌ Impossible de joindre l'API backend"));
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h1>Tissu Shop</h1>
      <p>Boutique de tissus en ligne — projet en construction.</p>
      <p>Statut backend : {apiStatus}</p>
    </div>
  );
}

export default App;
