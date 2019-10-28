module.exports.priceTableAux = function (application, req, res) {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    var connection = application.config.dbConnection();
    var priceTableAuxModel = new application.app.models.PriceTableAuxDAO(connection);

    var id_priceTableAux = req.params.id;

    priceTableAuxModel.getPriceTableAux(id_priceTableAux, function (error, result) {
        res.json(result[0]);
    });

}

module.exports.priceTableAuxs = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableAuxModel = new application.app.models.PriceTableAuxDAO(connection);

    priceTableAuxModel.getAllPriceTableAuxs(function (error, result) {
        res.json(result);
    });

}

module.exports.insertPriceTableAux = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableAuxModel = new application.app.models.PriceTableAuxDAO(connection);

    var priceTable = req.query;

    priceTableAuxModel.insertPriceTableAux(priceTable, function (error, resultDB) {
        priceTableAuxModel.getPriceTableAux(resultDB.insertId, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.updatePriceTableAux = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableAuxModel = new application.app.models.PriceTableAuxDAO(connection);

    var id_priceTableAux = req.params.id;
    var priceTableAux = req.query;

    priceTableAuxModel.updatePriceTableAux(priceTableAux, id_priceTableAux, function (error, resultDB) {
        priceTableAuxModel.getPriceTableAux(id_priceTableAux, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.deletePriceTableAux = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableAuxModel = new application.app.models.PriceTableAuxDAO(connection);

    var id_priceTableAux = req.params.id;

    priceTableAuxModel.deletePriceTableAux(id_priceTableAux, function (error, result) {
        res.json(result);
    });

}