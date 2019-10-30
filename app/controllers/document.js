module.exports.document = function (application, req, res) {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    var id_document = req.params.id;

    documentModel.getDocument(id_document, function (error, result) {
        res.json(result[0]);
    });

}

module.exports.documents = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    documentModel.getAllDocuments(function (error, result) {
        res.json(result);
    });

}

module.exports.insertDocument = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    var document = req.query;

    documentModel.insertDocument(document, function (error, resultDB) {
        documentModel.getDocument(resultDB.insertId, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.updateDocument = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    var id_document = req.params.id;
    var document = req.query;

    documentModel.updateDocument(document, id_document, function (error, resultDB) {
        documentModel.getDocument(id_document, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.deleteDocument = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    var id_document = req.params.id;

    documentModel.deleteDocument(id_document, function (error, result) {
        res.json(result);
    });

}