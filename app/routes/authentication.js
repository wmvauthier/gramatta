module.exports = function (application) {

    application.post('/login', function (req, res) {
        application.app.controllers.authentication.login(application, req, res);
    });

    application.post('/logout', function (req, res) {
        application.app.controllers.authentication.logout(application, req, res);
    });

}