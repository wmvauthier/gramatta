// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function DocumentDAO(connection) {
    this._connection = connection
}

DocumentDAO.prototype.getDocument = function (id_document, callback) {
    let sql = `SELECT * FROM document WHERE id_document = ?`;
    let data = [id_document];
    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.getAllDocuments = function (callback) {
    let sql = `SELECT * FROM document`;
    this._connection.query(sql, callback);
};

DocumentDAO.prototype.insertDocument = function (document, callback) {
    let sql = `INSERT INTO document SET
    documentNumber = ? ,
    ticket = ?,
    cartao = ?,
    placa = ?,
    cred = ?,
    terminal_entrada = ?,
    data_saida = ?,
    terminal_saida = ?,
    valor = ?`;

    let data = [document.documentNumber,
    document.ticket,
    document.cartao,
    document.placa,
    document.cred,
    document.terminal_entrada,
    document.data_saida,
    document.terminal_saida,
    document.valor];

    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.updateDocument = function (document, id_document, callback) {
    let sql = `UPDATE document SET
    documentNumber = ? ,
    ticket = ?,
    cartao = ?,
    placa = ?,
    cred = ?,
    terminal_entrada = ?,
    data_saida = ?,
    terminal_saida = ?,
    valor = ?
    WHERE id_document = ?`;

    let data = [document.documentNumber,
    document.ticket,
    document.cartao,
    document.placa,
    document.cred,
    document.terminal_entrada,
    document.data_saida,
    document.terminal_saida,
    document.valor,
        id_document];

    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.deleteDocument = function (id_document, callback) {
    let sql = `DELETE FROM document WHERE id_document = ?`;
    let data = [id_document];
    this._connection.query(sql, data, callback);
};

module.exports = function () {
    return DocumentDAO;
}
