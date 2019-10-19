//Arquivo Base para utilizar Express e configurar o Server

//Biblioteca do Express
var express = require('express')();
var app = express;

//O tratador das diversas "Rotas" é o Consign
//Com ele podemos adicionar diversos módulos automaticamente também
var consign = require('consign');
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

//O EJS que renderiza o HTML
app.set('view engine', 'ejs');

//Aqui eu direciono o local onde eu procuro as Views
app.set('views', './app/views')

module.exports = app;