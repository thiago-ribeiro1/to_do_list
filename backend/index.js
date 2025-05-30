const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./route/taskRoute.js");
const db = require("./db/db.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json()); // Para ler o corpo das requisições como JSON
app.use("/api", taskRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
