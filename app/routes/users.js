module.exports = function (application) {

    application.get('/users', function (req, res) {
        application.app.controllers.users.users(application, req, res);
    });

    application.get('/form_insert_user', function (req, res) {
        application.app.controllers.users.form_insert_user(application, req, res);
    });

    application.get('/form_update_user', function (req, res) {
        application.app.controllers.users.form_update_user(application, req, res);
    });

    application.post('/form_insert_user/insertUser', function (req, res) {
        application.app.controllers.users.insertUser(application, req, res);
    });

    application.post('/form_update_user/updateUser', function (req, res) {
        application.app.controllers.users.updateUser(application, req, res);
    });

}