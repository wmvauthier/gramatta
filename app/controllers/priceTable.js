module.exports.priceTable = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableModel = new application.app.models.PriceTableDAO(connection);

    var id_priceTable = req.params.id;

    priceTableModel.getPriceTable(id_priceTable, function (error, result) {
        if (result) {
            res.json(result[0]);
        }
        else {
            res.json({ 'error': error });
        }
    });

}

module.exports.priceTables = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableModel = new application.app.models.PriceTableDAO(connection);

    priceTableModel.getAllPriceTables(function (error, result) {
        if (result) {
            res.json(result);
        }
        else {
            res.json({ 'error': error });
        }
    });

}

module.exports.insertPriceTable = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableModel = new application.app.models.PriceTableDAO(connection);

    var priceTable = req.body;

    priceTableModel.insertPriceTable(priceTable, function (errorDB, resultDB) {
        if (resultDB) {
            if (resultDB.insertId) {
                priceTableModel.getPriceTable(resultDB.insertId, function (error, result) {
                    if (result) {
                        res.json(result[0]);
                    }
                    else {
                        res.json({ 'error': error });
                    }
                });
            } else {
                res.json({ 'error': errorDB });
            }
        } else {
            res.json({ 'error': errorDB });
        }

    });

}

module.exports.updatePriceTable = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableModel = new application.app.models.PriceTableDAO(connection);

    var id_priceTable = req.params.id;
    var priceTable = req.body;

    priceTableModel.updatePriceTable(priceTable, id_priceTable, function (error, resultDB) {
        priceTableModel.getPriceTable(id_priceTable, function (error, result) {
            if (result) {
                res.json(result[0]);
            }
            else {
                res.json({ 'error': error });
            }
        });
    });

}

module.exports.deletePriceTable = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableModel = new application.app.models.PriceTableDAO(connection);

    var id_priceTable = req.params.id;

    priceTableModel.deletePriceTable(id_priceTable, function (error, result) {
        if (result) {
            res.json(result);
        }
        else {
            res.json({ 'error': error });
        }
    });

}