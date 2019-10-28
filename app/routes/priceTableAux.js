module.exports = function (application) {

    //Métodos precisarão ser alterados para POST após testes

    application.get('/priceTableAux', function (req, res) {
        application.app.controllers.priceTableAux.priceTableAuxs(application, req, res);
    });

    application.get('/priceTableAux/:id', function (req, res) {
        application.app.controllers.priceTableAux.priceTableAux(application, req, res);
    });

    application.post('/priceTableAux', function (req, res) {
        application.app.controllers.priceTableAux.insertPriceTableAux(application, req, res);
    });

    application.put('/priceTableAux/:id', function (req, res) {
        application.app.controllers.priceTableAux.updatePriceTableAux(application, req, res);
    });

    application.delete('/priceTableAux/:id', function (req, res) {
        application.app.controllers.priceTableAux.deletePriceTableAux(application, req, res);
    });

}