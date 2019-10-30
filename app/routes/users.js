module.exports = function (application) {

    application.get('/user', function (req, res) {
        application.app.controllers.users.users(application, req, res);
    });

    application.get('/user/:id', function (req, res) {
        application.app.controllers.users.user(application, req, res);
    });

    application.post('/user', function (req, res) {
        application.app.controllers.users.insertUser(application, req, res);
    });

    application.put('/user/:id', function (req, res) {
        application.app.controllers.users.updateUser(application, req, res);
    });

    application.delete('/user/:id', function (req, res) {
        application.app.controllers.users.deleteUser(application, req, res);
    });

}