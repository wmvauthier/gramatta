module.exports = function (application) {

    //Métodos precisarão ser alterados para POST após testes

    application.get('/user', function (req, res) {
        application.app.controllers.users.user(application, req, res);
    });

    application.get('/users', function (req, res) {
        application.app.controllers.users.users(application, req, res);
    });

    application.get('/insertUser', function (req, res) {
        application.app.controllers.users.insertUser(application, req, res);
    });

    application.get('/updateUser', function (req, res) {
        application.app.controllers.users.updateUser(application, req, res);
    });

    application.get('/deleteUser', function (req, res) {
        application.app.controllers.users.deleteUser(application, req, res);
    });

}