module.exports = function (application) {

    //Métodos precisarão ser alterados para POST após testes

    application.get('/terminal', function (req, res) {
        application.app.controllers.terminal.terminals(application, req, res);
    });

    application.get('/terminal/:id', function (req, res) {
        application.app.controllers.terminal.terminal(application, req, res);
    });

    application.post('/terminal', function (req, res) {
        application.app.controllers.terminal.insertTerminal(application, req, res);
    });

    application.put('/terminal/:id', function (req, res) {
        application.app.controllers.terminal.updateTerminal(application, req, res);
    });

    application.delete('/terminal/:id', function (req, res) {
        application.app.controllers.terminal.deleteTerminal(application, req, res);
    });

}