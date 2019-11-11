module.exports = function (application) {

    application.get('/affiliate', function (req, res) {
        application.app.controllers.affiliate.affiliates(application, req, res);
    });

    application.get('/affiliate/:id', function (req, res) {
        application.app.controllers.affiliate.affiliate(application, req, res);
    });

    application.post('/affiliate', function (req, res) {
        application.app.controllers.affiliate.insertAffiliate(application, req, res);
    });

    application.put('/affiliate/:id', function (req, res) {
        application.app.controllers.affiliate.updateAffiliate(application, req, res);
    });

    application.delete('/affiliate/:id', function (req, res) {
        application.app.controllers.affiliate.deleteAffiliate(application, req, res);
    });

}