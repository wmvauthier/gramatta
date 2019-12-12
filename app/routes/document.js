module.exports = function (application) {

    application.get('/document', function (req, res) {
        application.app.controllers.document.documents(application, req, res);
    });

    application.get('/document/:id', function (req, res) {
        application.app.controllers.document.document(application, req, res);
    });

    application.get('/document_Affiliates', function (req, res) {
        application.app.controllers.document.affiliates(application, req, res);
    });

    application.post('/document', function (req, res) {
        application.app.controllers.document.insertDocument(application, req, res);
    });

    application.get('/getRandomAFF', function (req, res) {
        application.app.controllers.document.getRandomAFF(application, req, res);
    });

    application.post('/insertDocumentAFF', function (req, res) {
        application.app.controllers.document.insertDocumentAFF(application, req, res);
    });

    application.post('/exitDocument', function (req, res) {
        application.app.controllers.document.exitDocument(application, req, res);
    });

    application.put('/document/:id', function (req, res) {
        application.app.controllers.document.updateDocument(application, req, res);
    });

    application.delete('/document/:id', function (req, res) {
        application.app.controllers.document.deleteDocument(application, req, res);
    });

}