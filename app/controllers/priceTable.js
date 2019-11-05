module.exports.priceTable = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableModel = new application.app.models.PriceTableDAO(connection);

    var id_priceTable = req.params.id;

    priceTableModel.getPriceTable(id_priceTable, function (error, result) {
        res.json(result[0]);
    });

}

module.exports.priceTables = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableModel = new application.app.models.PriceTableDAO(connection);

    priceTableModel.getAllPriceTables(function (error, result) {
        res.json(result);
    });

}

module.exports.insertPriceTable = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableModel = new application.app.models.PriceTableDAO(connection);

    var priceTable = req.body;

    priceTableModel.insertPriceTable(priceTable, function (error, resultDB) {
        priceTableModel.getPriceTable(resultDB.insertId, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.updatePriceTable = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableModel = new application.app.models.PriceTableDAO(connection);

    var id_priceTable = req.params.id;
    var priceTable = req.body;

    priceTableModel.updatePriceTable(priceTable, id_priceTable, function (error, resultDB) {
        priceTableModel.getPriceTable(id_priceTable, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.deletePriceTable = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableModel = new application.app.models.PriceTableDAO(connection);

    var id_priceTable = req.params.id;

    priceTableModel.deletePriceTable(id_priceTable, function (error, result) {
        res.json(result);
    });

}