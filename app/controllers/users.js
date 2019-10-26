module.exports.user = function (application, req, res) {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.query;

    userModel.getUser(id_user, function (error, result) {
        res.json(result[0]);
    });

}

module.exports.users = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    userModel.getAllUsers(function (error, result) {
        res.json(result);
    });

}

module.exports.insertUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var user = req.query;

    userModel.insertUser(user, function (error, resultDB) {

        userModel.getUser(resultDB.insertId, function (error, result) {
            res.json(result[0]);
        });

    });

}

module.exports.updateUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    //var user = req.query;
    var user = { "id_user": "30", "nome": "ThamyGretchen2018", "cargo": "ThamyX", "user_login": "thamy2019", "user_senha": "ti159753", "nivel_acesso": "LINK" }

    userModel.updateUser(user, function (error, result) {
        res.json(result);
    });

}

module.exports.deleteUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.query;

    userModel.deleteUser(id_user, function (error, result) {
        res.json(result);
    });

}