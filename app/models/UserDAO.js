// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function UserDAO(connection) {
    this._connection = connection
}

UserDAO.prototype.getUser = function (user, callback) {
    let sql = `SELECT * FROM users WHERE id_user = ?`;
    let data = [user];
    this._connection.query(sql, data, callback);
};

UserDAO.prototype.getAllUsers = function (callback) {
    let sql = `SELECT * FROM users`;
    this._connection.query(sql, callback);
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

UserDAO.prototype.updateUser = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
};

UserDAO.prototype.deleteUser = function (callback) {
    this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
};

module.exports = function () {
    return UserDAO;
}
