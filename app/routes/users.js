module.exports = function (application) {

    application.get('/users', function (req, res) {
        application.app.controllers.users.users(application, req, res);
    });

    application.get('/form_user', function (req, res) {
        application.app.controllers.users.form_user(application, req, res);
    });

    application.post('/form_user/insertUser', function (req, res) {
        application.app.controllers.users.insertUser(application, req, res);
    });

    application.post('/form_user/updateUser', function (req, res) {
        application.app.controllers.users.user(application, req, res);
    });

}