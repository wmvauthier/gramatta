module.exports.user = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    var id_user = req.query;
    id_user = 1;

    userModel.getUser(id_user, function (error, result) {
        res.send({ user: result[0] });
    });

}

module.exports.form_insert_user = function (application, req, res) {
    res.render('users/form_insert_user.ejs', { validacao: {} });
}

module.exports.form_update_user = function (application, req, res) {
    res.render('users/form_update_user.ejs', { validacao: {} });
}

module.exports.users = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    userModel.getAllUsers(function (error, result) {
        res.render('users/users.ejs', { users: result });
    });

}

module.exports.insertUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    userModel.getAllUsers(function (error, result) {
        res.render('users/users.ejs', { users: result });
    });

}

module.exports.insertUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    userModel.getAllUsers(function (error, result) {
        res.render('users/users.ejs', { users: result });
    });

}

module.exports.insertUser = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    userModel.getAllUsers(function (error, result) {
        res.render('users/users.ejs', { users: result });
    });

}