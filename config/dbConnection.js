//Assim eu conecto via MySql
var mysql = require('mysql');

var connMySQL = function () {
    return connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    return connMySQL;
};