module.exports = function (application) {

    //Métodos precisarão ser alterados para POST após testes

    application.get('/courtyard', function (req, res) {
        application.app.controllers.courtyard.courtyards(application, req, res);
    });

    application.get('/courtyard/:id', function (req, res) {
        application.app.controllers.courtyard.courtyard(application, req, res);
    });

    application.post('/courtyard', function (req, res) {
        application.app.controllers.courtyard.insertCourtyard(application, req, res);
    });

    application.put('/courtyard/:id', function (req, res) {
        application.app.controllers.courtyard.updateCourtyard(application, req, res);
    });

    application.delete('/courtyard/:id', function (req, res) {
        application.app.controllers.courtyard.deleteCourtyard(application, req, res);
    });

}