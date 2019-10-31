function checkLogin(application, login, password) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);
    var genToken = token();

    userModel.getUserByLogin(login, function (error, resultLogin) {

        if (resultLogin[0]) {
            if (resultLogin[0].user_senha == password) {
                userModel.setToken(resultLogin[0].id_user, genToken, function (error, resultToken) {

                    if (resultToken.affectedRows == 1) {
                        userModel.getUser(resultLogin[0].id_user, function (error, resultUser) {
                            console.log("Usuário com Token");
                        });
                    } else {
                        console.log("Erro na Geração de Token");
                    }

                });
            } else {
                console.log("Usuário Existente com Senha Errada");
            }
        } else {
            console.log("Usuário Inexistente");
        }

    });

}

function checkLogout(application, login) {

    var connection = application.config.dbConnection();
    var userModel = new application.app.models.UserDAO(connection);

    userModel.getUserByLogin(login, function (error, resultLogin) {

        if (resultLogin[0]) {
            userModel.setToken(resultLogin[0].id_user, null, function (error, resultToken) {

                if (resultToken.affectedRows == 1) {
                    console.log("Usuário sem Token");
                } else {
                    console.log("Erro na remoção de Token");
                }

            });
        } else {
            console.log("Usuário Inexistente");
        }

    });

}

function token() { return Math.random().toString(36).substr(2); }

function login(application, user) {

    var login = user.user_login;
    var password = user.user_senha;

    return checkLogin(application, login, password);

}

function logout(application, user) {

    var login = user.user_login;
    var password = user.user_senha;

    return checkLogout(application, login);

}

module.exports.token = token;
module.exports.login = login;
module.exports.logout = logout;