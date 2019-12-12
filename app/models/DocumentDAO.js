// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function DocumentDAO(connection) {
    this._connection = connection
}

DocumentDAO.prototype.getDocument = function (id_document, callback) {
    let sql = `SELECT * FROM document WHERE id_document = ? `;
    let data = [id_document];
    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.getAllDocuments = function (callback) {
    let sql = `SELECT * FROM document ORDER BY id_document DESC`;
    this._connection.query(sql, callback);
};

DocumentDAO.prototype.getAllAffiliateDocuments = function (callback) {
    let sql = `SELECT * FROM document where document_type = "AFF" ORDER BY id_document DESC`;
    this._connection.query(sql, callback);
};

DocumentDAO.prototype.getAllHoristsDocuments = function (callback) {
    let sql = `SELECT * FROM document where document_type = "HOR" ORDER BY id_document DESC`;
    this._connection.query(sql, callback);
};

DocumentDAO.prototype.getAllMonthlyDocuments = function (callback) {
    let sql = `SELECT * FROM document where document_type = "MEN" ORDER BY id_document DESC`;
    this._connection.query(sql, callback);
};

DocumentDAO.prototype.getAllAuthorizedDocuments = function (callback) {
    let sql = `SELECT * FROM document where document_type = "AUT" ORDER BY id_document DESC`;
    this._connection.query(sql, callback);
};

DocumentDAO.prototype.getAllOnCourtyardDocumentsFromCourtyard = function (id_patio, callback) {
    let sql = `SELECT * FROM document where patio = ? and docStatus = "true" ORDER BY id_document DESC`;
    let data = [id_patio];
    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.getAllOnCourtyardAffiliateDocumentsFromCourtyard = function (id_patio, callback) {
    let sql = `SELECT * FROM document where document_type = "AFF" and patio = ? and docStatus = "true" ORDER BY id_document DESC`;
    let data = [id_patio];
    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.getAllOnCourtyardHoristsDocumentsFromCourtyard = function (id_patio, callback) {
    let sql = `SELECT * FROM document where document_type = "HOR" and patio = ? and docStatus = "true" ORDER BY id_document DESC`;
    let data = [id_patio];
    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.getAllOnCourtyardMonthlyDocumentsFromCourtyard = function (id_patio, callback) {
    let sql = `SELECT * FROM document where document_type = "MEN" and patio = ? and docStatus = "true" ORDER BY id_document DESC`;
    let data = [id_patio];
    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.getAllOnCourtyardAuthorizedDocumentsFromCourtyard = function (id_patio, callback) {
    let sql = `SELECT * FROM document where document_type = "AUT" and patio = ? and docStatus = "true" ORDER BY id_document DESC`;
    let data = [id_patio];
    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.insertDocument = function (document, callback) {

    let sql = "";
    let data = "";

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
        docStatus = "true",
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


    this._connection.query(sql, data, callback);
};

DocumentDAO.prototype.exitDocument = function (document, id_document, callback) {

    let sql = "";
    let data = "";

    sql = `UPDATE document SET
    document_type = ? ,
    nfce = ? ,
    ticket = ?,
    cartao = ?,
    placa = ?,
    cred = ?,
    terminal_entrada = ?,
    data_saida = ?,
    terminal_saida = ?,
    valor = ?,
    docStatus = "false"
    WHERE id_document = ?`;

    data = [document.document_type,
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

DocumentDAO.prototype.getRandomAFF = function (callback) {
    let sql = `SELECT * FROM document WHERE nfce = "" AND document_type = "AFF" AND docStatus = "true" 
                ORDER BY id_document ASC LIMIT ?; `;
    let data = [1];
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

    let data = [document.document_type,
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
