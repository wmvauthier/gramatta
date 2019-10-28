// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function ConfigParkingDAO(connection) {
    this._connection = connection
}

ConfigParkingDAO.prototype.getConfigParking = function (callback) {
    this._connection.query('SELECT * FROM configParking WHERE id_parking = 1', callback);
};

ConfigParkingDAO.prototype.updateConfigParking = function (configParking, callback) {

    let sql = `UPDATE configParking SET
    nome_fantasia = ? ,
    razao_social = ? ,
    endereco = ? ,
    cnpj = ? ,
    inscricao_municipal = ? ,
    telefone = ? ,
    website = ? ,
    email = ? 
    WHERE id_parking = ?`;

    let data = [configParking.nome_fantasia,
    configParking.razao_social,
    configParking.endereco,
    configParking.cnpj,
    configParking.inscricao_municipal,
    configParking.telefone,
    configParking.website,
    configParking.email, 1];

    this._connection.query(sql, data, callback);

};

module.exports = function () {
    return ConfigParkingDAO;
}