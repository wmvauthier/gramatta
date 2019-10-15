//Arquivo Base para utilizar Express e configurar o Server

//Para "adicionar bibliotecas ou classes"
var express = require('express')();
var app = express;

//O EJS que renderiza o HTML
app.set('view engine','ejs');

//Aqui eu direciono o local onde eu procuro as Views
app.set('views','./app/views')

module.exports = app;