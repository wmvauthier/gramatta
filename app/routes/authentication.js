module.exports = function (application) {

    application.post('/login', function (req, res) {
        application.app.controllers.login.login(application, req, res);
    });

    application.post('/logout', function (req, res) {
        application.app.controllers.login.logout(application, req, res);
    });

}