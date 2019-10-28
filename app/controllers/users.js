module.exports.user = function (application, req, res) {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.params.id;

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

    var user = req.body;

    userModel.insertUser(user, function (error, resultDB) {
        userModel.getUser(resultDB.insertId, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.updateUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.params.id;
    var user = req.query;

    userModel.updateUser(user, id_user, function (error, resultDB) {
        userModel.getUser(id_user, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.deleteUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.params.id;

    userModel.deleteUser(id_user, function (error, result) {
        res.json(result);
    });

}