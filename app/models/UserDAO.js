// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function UserDAO(connection) {
    this._connection = connection
}

UserDAO.prototype.getUser = function (id, callback) {
    let sql = `SELECT * FROM users WHERE id_user = ?`;
    let data = [id];
    this._connection.query(sql, data, callback);
};

UserDAO.prototype.getAllUsers = function (callback) {
    let sql = `SELECT * FROM users`;
    this._connection.query(sql, callback);
};

UserDAO.prototype.getUserByLogin = function (login, callback) {
    let sql = `SELECT * FROM users WHERE user_login = ?`;
    let data = [login];
    this._connection.query(sql, data, callback);
};

UserDAO.prototype.getUserByToken = function (token, callback) {
    let sql = `SELECT * FROM users WHERE token = ?`;
    let data = [token];
    this._connection.query(sql, data, callback);
};

UserDAO.prototype.setToken = function (id, token, callback) {
    let sql = `UPDATE users SET token = ? WHERE id_user = ?`;
    let data = [token, id];
    this._connection.query(sql, data, callback);
};

UserDAO.prototype.insertUser = function (user, callback) {
    let sql = `INSERT INTO users SET
    nome = ? ,
    cargo = ? ,
    user_login = ? ,
    user_senha = ? ,
    nivel_acesso = ?`;

    let data = [user.nome,
    user.cargo,
    user.user_login,
    user.user_senha,
    user.nivel_acesso];

    this._connection.query(sql, data, callback);
};

UserDAO.prototype.updateUser = function (user, id_user, callback) {
    let sql = `UPDATE users SET
    nome = ? ,
    cargo = ? ,
    user_login = ? ,
    user_senha = ? ,
    nivel_acesso = ? ,
    token = ?
    WHERE id_user = ?`;

    let data = [user.nome,
    user.cargo,
    user.user_login,
    user.user_senha,
    user.nivel_acesso,
    user.token,
        id_user];

    this._connection.query(sql, data, callback);
};

UserDAO.prototype.deleteUser = function (id_user, callback) {
    let sql = `DELETE FROM users WHERE id_user = ?`;
    let data = [id_user];
    this._connection.query(sql, data, callback);
};

module.exports = function () {
    return UserDAO;
}
