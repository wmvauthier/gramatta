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

DocumentDAO.prototype.getAllAffiliateDocuments = function (callback) {
    let sql = `SELECT * FROM document where document_type = "AFF"`;
    this._connection.query(sql, callback);
};

DocumentDAO.prototype.insertDocument = function (document, callback) {

    let sql = "";
    let data = "";

    if (document.document_type == "AFF") {
        sql = `INSERT INTO document SET
        document_type = ? ,
        nfce = ? ,
        ticket = ?,
        cartao = ?,
        placa = ?,
        cred = ?,
        terminal_entrada = ?,
        data_entrada = ?,
        terminal_saida = ?,
        valor = ?`;

        data = [document.document_type,
        document.nfce,
        document.ticket,
        document.cartao,
        document.placa,
        document.cred,
        document.terminal_entrada,
        document.data_entrada,
        document.terminal_saida,
        document.valor];

    } else {
        sql = `INSERT INTO document SET
        document_type = ? ,
        nfce = ? ,
        ticket = ?,
        cartao = ?,
        placa = ?,
        cred = ?,
        terminal_entrada = ?,
        data_entrada = ?,
        data_saida = ?,
        terminal_saida = ?,
        valor = ?`;

        data = [document.document_type,
        document.nfce,
        document.ticket,
        document.cartao,
        document.placa,
        document.cred,
        document.terminal_entrada,
        document.data_entrada,
        document.data_saida,
        document.terminal_saida,
        document.valor];
    }

    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.updateDocument = function (document, id_document, callback) {
    let sql = `UPDATE document SET
    document_type = ? ,
    nfce = ? ,
    ticket = ?,
    cartao = ?,
    placa = ?,
    cred = ?,
    terminal_entrada = ?,
    data_saida = ?,
    terminal_saida = ?,
    valor = ?
    WHERE id_document = ?`;

    let data = [document.type,
    document.nfce,
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
