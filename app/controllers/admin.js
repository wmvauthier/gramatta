module.exports.formulario_inclusao_noticia = function (application, req, res) {
    res.render("admin/form_add_noticia.ejs", { validacao: {}, noticia: {} });
}

module.exports.noticias_salvar = function (application, req, res) {

    var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumno é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo entre 10 e 100').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticia', 'Data é obrigatório').notEmpty();
    req.assert('noticia', 'Título é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.render("admin/form_add_noticia.ejs", { validacao: erros, noticia: noticia });
        return;
    }

    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticia(noticia, function (error, result) {
        res.redirect('/noticias');
    });

}