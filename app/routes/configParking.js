module.exports = function (application) {

    application.get('/configParking', function (req, res) {
        application.app.controllers.configParking.getConfigParking(application, req, res);
    });

    application.put('/configParking/:id', function (req, res) {
        application.app.controllers.configParking.updateConfigParking(application, req, res);
    });

};