var app = require('./config/server.js')

//Renderiza e separa o HTML das páginas JS
app.get('/noticias',function(req,res){
    res.render("noticias/noticias.ejs");
});

app.get('/formulario_inclusao_noticia',function(req,res){
    res.render("admin/form_add_noticia.ejs");
});

app.get('/',function(req,res){
    res.render("home/index.ejs");
});

app.listen(3000, function () {
    console.log("Servidor rodando com Express");
})