// Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas
function ConfigEstacionamentoDAO(connection) {
    this._connection = connection
}

ConfigEstacionamentoDAO.prototype.getConfigEstacionamento = function (callback) {
    this._connection.query('select * from configEstacionamento where id_parking = 1', callback);
};

ConfigEstacionamentoDAO.prototype.setConfigEstacionamento = function (configEstacionamento, callback) {
    this._connection.query('insert into noticias set ? ', noticia, callback);
};

module.exports = function () {
    return ConfigEstacionamentoDAO;
}