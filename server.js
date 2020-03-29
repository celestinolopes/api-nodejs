//Configurando o Express
const express = require("express");
const app = express();

//Configurando o BodyParser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Configurando o Mongooose
const DBCONFIG = require("./app/config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(DBCONFIG.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Mongo DB conectado com sucesso");
  })
  .catch(erro => {
    console.log("Ocorreu um erro ao conectar com o mongDB :" + erro);
  });

  require('./app/routes/user.routes')(app);
const PORT = 8080;
app.listen(PORT, () => {
  console.log("Servidor rodando em localhost:" + PORT);
});
