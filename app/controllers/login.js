module.exports.login = function (application, req, res) {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    var businessFunctions = application.app.businessFunctions.login;
    console.log(businessFunctions.token());

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    var id_document = req.params.id;

    documentModel.getDocument(id_document, function (error, result) {
        res.json(result[0]);
    });

}

module.exports.logout = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    documentModel.getAllDocuments(function (error, result) {
        res.json(result);
    });

}