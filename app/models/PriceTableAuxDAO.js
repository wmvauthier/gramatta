// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function PriceTableAuxDAO(connection) {
    this._connection = connection
}

PriceTableAuxDAO.prototype.getPriceTableAux = function (id_priceTableAux, callback) {
    let sql = `SELECT * FROM priceTableAux WHERE id_tabela_preco_aux = ?`;
    let data = [id_priceTableAux];
    this._connection.query(sql, data, callback);
};

PriceTableAuxDAO.prototype.getAllPriceTableAuxs = function (callback) {
    let sql = `SELECT * FROM priceTableAux`;
    this._connection.query(sql, callback);
};

PriceTableAuxDAO.prototype.insertPriceTableAux = function (priceTableAux, callback) {
    let sql = `INSERT INTO priceTableAux SET
    nome = ? ,
    periodo = ?,
    valor = ?,
    valorPerda = ?,
    tolerancia = ?`;

    let data = [priceTableAux.nome,
    priceTableAux.periodo,
    priceTableAux.valor,
    priceTableAux.valorPerda,
    priceTableAux.tolerancia];

    this._connection.query(sql, data, callback);
};

PriceTableAuxDAO.prototype.updatePriceTableAux = function (priceTableAux, id_priceTableAux, callback) {
    let sql = `UPDATE priceTableAux SET
    nome = ? ,
    periodo = ?,
    valor = ?,
    valorPerda = ?,
    tolerancia = ?
    WHERE id_tabela_preco_aux = ?`;

    let data = [priceTableAux.nome,
    priceTableAux.periodo,
    priceTableAux.valor,
    priceTableAux.valorPerda,
    priceTableAux.tolerancia,
    id_priceTableAux];

    this._connection.query(sql, data, callback);
};

PriceTableAuxDAO.prototype.deletePriceTableAux = function (id_priceTableAux, callback) {
    let sql = `DELETE FROM priceTableAux WHERE id_tabela_preco_aux = ?`;
    let data = [id_priceTableAux];
    this._connection.query(sql, data, callback);
};

module.exports = function () {
    return PriceTableAuxDAO;
}
