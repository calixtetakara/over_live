const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // Indispensable pour autoriser le front-end
app.use(express.json());

let messages = [{ nom: "Prof", texte: "Bienvenue !" }];

// Route GET pour récupérer les messages
app.get("/messages", (req, res) => res.json(messages));

// Route POST pour ajouter un message
app.post("/messages", (req, res) => {
  const { nom, texte } = req.body;
  if (!nom || !texte) return res.status(400).json({ erreur: "requis" });
  messages.push({ nom, texte });
  res.status(201).json({ nom, texte });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("API sur le port " + PORT));