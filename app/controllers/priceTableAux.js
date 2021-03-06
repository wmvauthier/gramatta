module.exports.priceTableAux = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableAuxModel = new application.app.models.PriceTableAuxDAO(connection);

    var id_priceTableAux = req.params.id;

    priceTableAuxModel.getPriceTableAux(id_priceTableAux, function (error, result) {
        if(result){
            res.json(result[0]);
        }
        else{
            res.json({'error': error});
        }
    });

}

module.exports.priceTableAuxs = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableAuxModel = new application.app.models.PriceTableAuxDAO(connection);

    priceTableAuxModel.getAllPriceTableAuxs(function (error, result) {
        if(result){
            res.json(result);
        }
        else{
            res.json({'error': error});
        }
    });

}

module.exports.insertPriceTableAux = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableAuxModel = new application.app.models.PriceTableAuxDAO(connection);

    var priceTable = req.body;

    priceTableAuxModel.insertPriceTableAux(priceTable, function (errorDB, resultDB) {

        if(resultDB.insertId){
            priceTableAuxModel.getPriceTableAux(resultDB.insertId, function (error, result) {
                if(result){
                    res.json(result[0]);
                }
                else{
                    res.json({'error': error});
                }
            });
        }else{
            res.json({'error': errorDB});
        }

    });

}

module.exports.updatePriceTableAux = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableAuxModel = new application.app.models.PriceTableAuxDAO(connection);

    var id_priceTableAux = req.params.id;
    var priceTableAux = req.body;

    priceTableAuxModel.updatePriceTableAux(priceTableAux, id_priceTableAux, function (error, resultDB) {
        priceTableAuxModel.getPriceTableAux(id_priceTableAux, function (error, result) {
            if(result){
                res.json(result[0]);
            }
            else{
                res.json({'error': error});
            }
        });
    });

}

module.exports.deletePriceTableAux = function (application, req, res) {

    var connection = application.config.dbConnection();
    var priceTableAuxModel = new application.app.models.PriceTableAuxDAO(connection);

    var id_priceTableAux = req.params.id;

    priceTableAuxModel.deletePriceTableAux(id_priceTableAux, function (error, result) {
        if(result){
            res.json(result);
        }
        else{
            res.json({'error': error});
        }
    });

}