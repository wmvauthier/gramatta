module.exports = function (application) {

    application.get('/form_configEstacionamento', function (req, res) {
        application.app.controllers.configEstacionamento.form_configEstacionamento(application, req, res);
    });

    application.post('/form_configEstacionamento/saveChanges', function (req, res) {
        application.app.controllers.configEstacionamento.form_configEstacionamento_save(application, req, res);
    });

};