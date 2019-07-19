const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true);

// Conecta no MongoDB
mongoose.connect(
  "mongodb://localhost:27017/auth",
  { useNewUrlParser: true }
);

// Carrega o model de Usuário
require("./models/user");

app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));

app.listen(3000);
