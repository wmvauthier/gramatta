// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function AffiliateDAO(connection) {
    this._connection = connection
}

AffiliateDAO.prototype.getAffiliate = function (id_affiliate, callback) {
    let sql = `SELECT * FROM affiliate WHERE id_afiliado = ?`;
    let data = [id_affiliate];
    this._connection.query(sql, data, callback);
};

AffiliateDAO.prototype.getAllAffiliates = function (callback) {
    let sql = `SELECT * FROM affiliate`;
    this._connection.query(sql, callback);
};

AffiliateDAO.prototype.insertAffiliate = function (affiliate, callback) {
    let sql = `INSERT INTO affiliate SET
    nome = ? ,
    cnpj = ?`;

    let data = [affiliate.nome, affiliate.cnpj];

    this._connection.query(sql, data, callback);
};

AffiliateDAO.prototype.updateAffiliate = function (affiliate, id_affiliate, callback) {
    let sql = `UPDATE affiliate SET
    nome = ? ,
    cnpj = ?
    WHERE id_afiliado = ?`;

    let data = [affiliate.nome, affiliate.cnpj, id_affiliate];

    this._connection.query(sql, data, callback);
};

AffiliateDAO.prototype.deleteAffiliate = function (id_affiliate, callback) {
    let sql = `DELETE FROM affiliate WHERE id_afiliado = ?`;
    let data = [id_affiliate];
    this._connection.query(sql, data, callback);
};

module.exports = function () {
    return AffiliateDAO;
}
