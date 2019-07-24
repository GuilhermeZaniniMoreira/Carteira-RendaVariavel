const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")
mongoose.set('useCreateIndex', true);

// Conecta no MongoDB
mongoose.connect(
  "mongodb://localhost:27017/auth",
  { useNewUrlParser: true }
);

// Carrega o model de Usuário
require("./models/user");
// Carrega o model de Stock
require("./models/stock");

app.use(cors())
app.use(bodyParser.json());

// Inicia as rotas da API
app.use("/api", require("./controllers/userController"));
app.use("/api/stock", require("./controllers/stockController"));

app.listen(3333);
