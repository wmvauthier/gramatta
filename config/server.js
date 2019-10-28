//Arquivo Base para utilizar Express e configurar o Server
//Biblioteca do Express
var express = require('express')
    , expressValidator = require('express-validator')
    , app = express();

//Um middleware 'body-parser' para poder tratar requisições GET e POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Um middleware 'express-validator' para validar campos
//var expressValidator = require('express-validator');
//app.use(expressValidator());
app.use(expressValidator());

//Um middleware do Express para a inserção de arquivos estáticos HTML, CSS ou JS
app.use(express.static('./app/public'));

//O tratador das diversas "Rotas" é o Consign
//Com ele podemos adicionar diversos módulos automaticamente também
var consign = require('consign');
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .then('config/dbConnection.js')
    .into(app);

//O EJS que renderiza o HTML
app.set('view engine', 'ejs');

//Aqui eu direciono o local onde eu procuro as Views
app.set('views', './app/views');

module.exports = app;