//Arquivo Base para utilizar Express

//Para "adicionar bibliotecas"
var express = require('express')();
var app = express;

//O EJS que renderiza o HTML
app.set('view engine','ejs');

//Renderiza e separa o HTML das páginas JS
app.get('/noticias',function(req,res){
    res.render("noticias/noticias");
});

app.get('/formulario_inclusao_noticia',function(req,res){
    res.render("admin/form_add_noticia");
});

app.get('/',function(req,res){
    res.render("home/index.ejs");
});

app.listen(3000, function () {
    console.log("Servidor rodando com Express");
})