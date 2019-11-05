// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function PriceTableDAO(connection) {
    this._connection = connection
}

PriceTableDAO.prototype.getPriceTable = function (id_priceTable, callback) {
    let sql = `SELECT * FROM priceTable WHERE id_tabela_preco = ?`;
    let data = [id_priceTable];
    this._connection.query(sql, data, callback);
};

PriceTableDAO.prototype.getAllPriceTables = function (callback) {
    let sql = `SELECT * FROM priceTable`;
    this._connection.query(sql, callback);
};

PriceTableDAO.prototype.insertPriceTable = function (priceTable, callback) {
    let sql = `INSERT INTO priceTable SET
    nome = ? ,
    periodo = ?,
    valor = ?,
    tabela_aux = ?`;

    let data = [priceTable.nome, priceTable.periodo, priceTable.valor, priceTable.tabela_aux];

    this._connection.query(sql, data, callback);
};

PriceTableDAO.prototype.updatePriceTable = function (priceTable, id_priceTable, callback) {
    let sql = `UPDATE priceTable SET
    nome = ? ,
    periodo = ?,
    valor = ?,
    tabela_aux = ?
    WHERE id_tabela_preco = ?`;

    let data = [priceTable.nome, priceTable.periodo, priceTable.valor, priceTable.tabela_aux, id_priceTable];
    this._connection.query(sql, data, callback);
};

PriceTableDAO.prototype.deletePriceTable = function (id_priceTable, callback) {
    let sql = `DELETE FROM priceTable WHERE id_tabela_preco = ?`;
    let data = [id_priceTable];
    this._connection.query(sql, data, callback);
};

module.exports = function () {
    return PriceTableDAO;
}
