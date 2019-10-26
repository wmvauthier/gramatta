module.exports.user = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.query;

    userModel.getUser(id_user, function (error, result) {
        res.send(result[0]);
    });

}

module.exports.users = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    userModel.getAllUsers(function (error, result) {
        res.send(result);
    });

}

module.exports.insertUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var user = req.query;

    userModel.insertUser(user, function (error, result) {

        userModel.getUser(result.insertId, function (error, result2) {
            res.send(result2[0]);
        });

    });

}

module.exports.updateUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    //var user = req.query;
    var user = { "id_user": "30", "nome": "ThamyGretchen2018", "cargo": "ThamyX", "user_login": "thamy2019", "user_senha": "ti159753", "nivel_acesso": "LINK" }

    userModel.updateUser(user, function (error, result) {
        res.send(result);
    });

}

module.exports.deleteUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.query;

    userModel.deleteUser(id_user, function (error, result) {
        res.send(result);
    });

}