require("dotenv").config();
const express = require("express");
const cors = require("cors");
const flavorRoutes = require("./src/routes/flavorRoutes");
const coupleRoutes = require("./src/routes/coupleRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", flavorRoutes);
app.use("/api", coupleRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});