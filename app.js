//Inclue as configurações do Servidor
var app = require('./config/server.js');

app.listen(3000, function () {
    console.log("Bem vindo ao Gramatta!");
});