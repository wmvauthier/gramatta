// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function ConfigEstacionamentoDAO(connection) {
    this._connection = connection
}

ConfigEstacionamentoDAO.prototype.getConfigEstacionamento = function (callback) {
    this._connection.query('SELECT * FROM configEstacionamento WHERE id_parking = 1', callback);
};

ConfigEstacionamentoDAO.prototype.updateConfigEstacionamento = function (configEstacionamento, callback) {

    let sql = `UPDATE configEstacionamento SET
    nome_fantasia = ? ,
    razao_social = ? ,
    endereco = ? ,
    cnpj = ? ,
    inscricao_municipal = ? ,
    telefone = ? ,
    website = ? ,
    email = ? 
    WHERE id_parking = ?`;

    let data = [configEstacionamento.nome_fantasia,
    configEstacionamento.razao_social,
    configEstacionamento.endereco,
    configEstacionamento.cnpj,
    configEstacionamento.inscricao_municipal,
    configEstacionamento.telefone,
    configEstacionamento.website,
    configEstacionamento.email, 1];

    this._connection.query(sql, data, callback);

};

module.exports = function () {
    return ConfigEstacionamentoDAO;
}