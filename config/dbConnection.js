//Assim eu conecto via MySql
var mysql = require('mysql');

var connMySQL = function () {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    return connMySQL;
};