const express = require("express");
const bodyParser = require("body-parser");
const taskRoutes = require("./route/taskRoute.js");
const db = require("./db/db.js");
const cors = require("cors");

const app = express();
app.use(cors({
  origin: 'http://3.148.216.231', // IP do seu frontend (ou domínio se tiver)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(bodyParser.json()); // Para ler o corpo das requisições como JSON
app.use("/api", taskRoutes);

const port = 80;
app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
