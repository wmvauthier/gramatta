var app = require('./config/server.js')

var rotaNoticias = require('./app/routes/rotaNoticias.js')(app);
var rotaHome = require('./app/routes/rotaHome.js')(app);
var rota = require('./app/routes/rotaNoticias.js')(app);

app.listen(3000, function () {
    console.log("Servidor rodando com Express");
})