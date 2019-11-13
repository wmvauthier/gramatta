// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function CourtyardDAO(connection) {
    this._connection = connection
}

CourtyardDAO.prototype.getCourtyard = function (id_courtyard, callback) {
    let sql = `SELECT * FROM courtyard WHERE id_patio = ?`;
    let data = [id_courtyard];
    this._connection.query(sql, data, callback);
};

CourtyardDAO.prototype.getAllCourtyards = function (callback) {
    let sql = `SELECT * FROM courtyard`;
    this._connection.query(sql, callback);
};

CourtyardDAO.prototype.insertCourtyard = function (courtyard, callback) {
    let sql = `INSERT INTO courtyard SET
    nome = ? ,
    qtd = ?,
    onCourtyard = 0,
    outCourtyard = ?,
    tabela_preco = ?`;

    let data = [courtyard.nome, courtyard.qtd, courtyard.outCourtyard, courtyard.tabela_preco];

    this._connection.query(sql, data, callback);
};

CourtyardDAO.prototype.updateCourtyard = function (courtyard, id_courtyard, callback) {
    let sql = `UPDATE courtyard SET
    nome = ? ,
    qtd = ? ,
    tabela_preco = ?
    WHERE id_patio = ?`;

    let data = [courtyard.nome, courtyard.qtd, courtyard.tabela_preco, id_courtyard];

    this._connection.query(sql, data, callback);
};

CourtyardDAO.prototype.updateCountCourtyard = function (onCourtyard, outCourtyard, id_courtyard, callback) {
    let sql = `UPDATE courtyard SET
    onCourtyard = ? ,
    outCourtyard = ?
    WHERE id_patio = ?`;

    let data = [onCourtyard, outCourtyard, id_courtyard];

    this._connection.query(sql, data, callback);
};

CourtyardDAO.prototype.deleteCourtyard = function (id_courtyard, callback) {
    let sql = `DELETE FROM courtyard WHERE id_patio = ?`;
    let data = [id_courtyard];
    this._connection.query(sql, data, callback);
};

module.exports = function () {
    return CourtyardDAO;
}
