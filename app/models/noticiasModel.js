module.exports = function (app) {

    // Aqui são colocados os Models da Aplicação, que executam as Queries e Consultas

    this.getNoticias = function (connection, callback) {
        connection.query('select * from noticias', callback);
    };

    this.getNoticia = function (connection, callback) {
        connection.query('select * from noticias where id_noticia = 1', callback);
    };

    return this;

}