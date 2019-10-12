//Arquivo Base para utilizar Express

//Para "adicionar bibliotecas"
var express = require('express')();
var app = express;

//O EJS que renderiza o HTML
app.set('view engine','ejs');

//Renderiza e separa o HTML das páginas JS
app.get('/tecnologia',function(req,res){
    res.render("secao/tecnologia.ejs");
});

app.get('/moda',function(req,res){
    res.send("<html><body>Moda Express</body></html>");
});

app.get('/',function(req,res){
    res.send("<html><body>Testando</body></html>");
});

app.listen(3000, function () {
    console.log("Servidor rodando com Express");
})