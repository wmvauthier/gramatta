module.exports.form_configEstacionamento = function (application, req, res) {

    var connection = application.config.dbConnection();
    var configEstacionamentoModel = new application.app.models.ConfigEstacionamentoDAO(connection);

    configEstacionamentoModel.getConfigEstacionamento(function (error, result) {
        console.log(result);
        res.render("config/configEstacionamento.ejs", { configEstacionamento : { result }, validacao : {} });
    });

};

module.exports.configEstacionamento_save = function (application, req, res) {

    /*var configEstacionamento = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
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
*/
}