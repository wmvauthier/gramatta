module.exports.login = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);
    var businessFunctions = application.app.businessFunctions.authentication;
    var genToken = businessFunctions.token();

    var user = req.body;
    var login = user.user_login;
    var password = user.user_senha;

    userModel.getUserByLogin(login, function (error, resultLogin) {

        if (resultLogin[0]) {
            if (resultLogin[0].user_senha == password) {

                userModel.setToken(resultLogin[0].id_user, genToken, function (error, resultToken) {

                    if (resultToken) {
                        if (resultToken.affectedRows == 1) {
                            userModel.getUser(resultLogin[0].id_user, function (error, resultUser) {
                                res.json({ 'user': resultUser[0] });
                            });
                        } else {
                            res.json({ 'msg': 'Erro na Geração de Token', 'hint': 'Verifique o Token' });
                        }
                    } else {
                        res.json({ 'error': error });
                    }

                });
            } else {
                res.json({ 'msg': businessFunctions.incorrectPassword, 'hint': businessFunctions.incorrectPasswordHint });
            }
        } else {
            res.json({ 'msg': businessFunctions.notFoundUser, 'hint': businessFunctions.notFoundUserHint });
        }

    });

}

module.exports.logout = function (application, req, res) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);
    var businessFunctions = application.app.businessFunctions.authentication;

    var user = req.body;
    var token = user.token;

    if (token) {
        userModel.getUserByToken(token, function (error, resultUser) {

            if (resultUser[0]) {
                userModel.setToken(resultUser[0].id_user, null, function (error, resultToken) {

                    if (resultToken.affectedRows == 1) {
                        res.json({ 'msg': businessFunctions.successfullyLogout, 'hint': businessFunctions.successfullyLogoutHint });
                    } else {
                        res.json({ 'msg': 'Erro na Gravação do Token' });
                    }

                });
            } else {
                res.json({ 'msg': businessFunctions.notFoundUser, 'hint': businessFunctions.notFoundUserHint });
            }

        });
    } else {
        res.json({ 'msg': businessFunctions.noToken, 'hint': businessFunctions.noTokenHint });
    }



}
