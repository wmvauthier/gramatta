module.exports = function (application) {

    application.get('/priceTable', function (req, res) {
        application.app.controllers.priceTable.priceTables(application, req, res);
    });

    application.get('/priceTable/:id', function (req, res) {
        application.app.controllers.priceTable.priceTable(application, req, res);
    });

    application.post('/priceTable', function (req, res) {
        application.app.controllers.priceTable.insertPriceTable(application, req, res);
    });

    application.put('/priceTable/:id', function (req, res) {
        application.app.controllers.priceTable.updatePriceTable(application, req, res);
    });

    application.delete('/priceTable/:id', function (req, res) {
        application.app.controllers.priceTable.deletePriceTable(application, req, res);
    });

}