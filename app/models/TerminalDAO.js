// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function TerminalDAO(connection) {
    this._connection = connection
}

TerminalDAO.prototype.getTerminal = function (id_terminal, callback) {
    let sql = `SELECT * FROM terminal WHERE id_terminal = ?`;
    let data = [id_terminal];
    this._connection.query(sql, data, callback);
};

TerminalDAO.prototype.getAllTerminals = function (callback) {
    let sql = `SELECT * FROM terminal`;
    this._connection.query(sql, callback);
};

TerminalDAO.prototype.insertTerminal = function (terminal, callback) {
    let sql = `INSERT INTO terminal SET
    descricao = ? ,
    ip = ?,
    patio = ?,
    funcao = ?,
    ip_cancela = ?`;

    let data = [terminal.descricao, terminal.ip, terminal.patio, terminal.funcao, terminal.ip_cancela];

    this._connection.query(sql, data, callback);
};

TerminalDAO.prototype.updateTerminal = function (terminal, id_terminal, callback) {
    let sql = `UPDATE terminal SET
    descricao = ? ,
    ip = ?,
    patio = ?,
    funcao = ?,
    ip_cancela = ?
    WHERE id_terminal = ?`;

    let data = [terminal.descricao, terminal.ip, terminal.patio, terminal.funcao, terminal.ip_cancela, terminal.id_terminal];

    this._connection.query(sql, data, callback);
};

TerminalDAO.prototype.deleteTerminal = function (id_terminal, callback) {
    let sql = `DELETE FROM terminal WHERE id_terminal = ?`;
    let data = [id_terminal];
    this._connection.query(sql, data, callback);
};

module.exports = function () {
    return TerminalDAO;
}
