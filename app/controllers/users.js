module.exports.user = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.params.id;

    userModel.getUser(id_user, function (error, result) {
        if (result) {
            res.json(result[0]);
        }
        else {
            res.json({ 'error': error });
        }
    });

}

module.exports.userToken = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var token = req.params.token;

    userModel.getUserByToken(token, function (error, result) {
        if (result) {
            res.json(result[0]);
        }
        else {
            res.json({ 'error': error });
        }
    });

}

module.exports.users = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    userModel.getAllUsers(function (error, result) {
        if (result) {
            res.json(result);
        }
        else {
            res.json({ 'error': error });
        }
    });

}

module.exports.insertUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var user = req.body;

    userModel.insertUser(user, function (errorDB, resultDB) {
        if (resultDB.insertId) {
            userModel.getUser(resultDB.insertId, function (error, result) {
                if (result) {
                    res.json(result[0]);
                }
                else {
                    res.json({ 'error': error });
                }
            });
        } else {
            res.json({ 'error': errorDB });
        }
    });

}

module.exports.updateUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.params.id;
    var user = req.body;

    userModel.updateUser(user, id_user, function (error, resultDB) {
        userModel.getUser(id_user, function (error, result) {
            if (result) {
                res.json(result[0]);
            }
            else {
                res.json({ 'error': error });
            }
        });
    });

}

module.exports.deleteUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.params.id;

    userModel.deleteUser(id_user, function (error, result) {
        if (result) {
            res.json(result);
        }
        else {
            res.json({ 'error': error });
        }
    });

}