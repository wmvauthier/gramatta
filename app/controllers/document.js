module.exports.document = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    var id_document = req.params.id;

    documentModel.getDocument(id_document, function (error, result) {
        if(result){
            res.json(result[0]);
        }
        else{
            res.json({'error': error});
        }
    });

}

module.exports.documents = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    documentModel.getAllDocuments(function (error, result) {
        if(result){
            res.json(result);
        }
        else{
            res.json({'error': error});
        }
    });

}

module.exports.affiliates = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    documentModel.getAllAffiliateDocuments(function (error, result) {
        res.json(result);
    });

}

module.exports.horists = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    documentModel.getAllHoristsDocuments(function (error, result) {
        res.json(result);
    });

}

module.exports.monthly = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    documentModel.getAllMonthlyDocuments(function (error, result) {
        res.json(result);
    });

}

module.exports.authorized = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    documentModel.getAllAuthorizedDocuments(function (error, result) {
        res.json(result);
    });

}

module.exports.insertDocument = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    var document = req.body;

    documentModel.insertDocument(document, function (errorDB, resultDB) {

        if(resultDB.insertId){
            documentModel.getDocument(resultDB.insertId, function (error, result) {
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

module.exports.updateDocument = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    var id_document = req.params.id;
    var document = req.body;

    documentModel.updateDocument(document, id_document, function (error, resultDB) {
        documentModel.getDocument(id_document, function (error, result) {
            if(result){
                res.json(result[0]);
            }
            else{
                res.json({'error': error});
            }
        });
    });

}

module.exports.deleteDocument = function (application, req, res) {

    var connection = application.config.dbConnection();
    var documentModel = new application.app.models.DocumentDAO(connection);

    var id_document = req.params.id;

    documentModel.deleteDocument(id_document, function (error, result) {
        if(result){
            res.json(result);
        }
        else{
            res.json({'error': error});
        }
    });

}