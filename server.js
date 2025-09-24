// server.js
const express = require("express");
const app = express();
const PORT = 5001;

// Middleware untuk parsing JSON
app.use(express.json());

// Routing dasar
app.get("/", (req, res) => {
  res.send("Server berjalan di port 5001 🚀");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
