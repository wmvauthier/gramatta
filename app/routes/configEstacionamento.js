module.exports = function (application) {

    application.get('/form_configEstacionamento', function (req, res) {
        application.app.controllers.configEstacionamento.form_configEstacionamento(application, req, res);
    });

};