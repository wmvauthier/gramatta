module.exports.courtyard = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);

    var id_courtyard = req.params.id;

    courtyardModel.getCourtyard(id_courtyard, function (error, result) {
        res.json(result[0]);
    });

}

module.exports.courtyards = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);

    courtyardModel.getAllCourtyards(function (error, result) {
        res.json(result);
    });

}

module.exports.insertCourtyard = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);

    var courtyard = req.body;

    courtyardModel.insertCourtyard(courtyard, function (error, resultDB) {
        courtyardModel.getCourtyard(resultDB.insertId, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.updateCourtyard = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);

    var id_courtyard = req.params.id;
    var courtyard = req.body;

    courtyardModel.updateCourtyard(courtyard, id_courtyard, function (error, resultDB) {
        courtyardModel.getCourtyard(id_courtyard, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.deleteCourtyard = function (application, req, res) {

    var connection = application.config.dbConnection();
    var courtyardModel = new application.app.models.CourtyardDAO(connection);

    var id_courtyard = req.params.id;

    courtyardModel.deleteCourtyard(id_courtyard, function (error, result) {
        res.json(result);
    });

}