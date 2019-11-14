module.exports.terminal = function (application, req, res) {

    var connection = application.config.dbConnection();
    var terminalModel = new application.app.models.TerminalDAO(connection);

    var id_terminal = req.params.id;

    terminalModel.getTerminal(id_terminal, function (error, result) {
        res.json(result[0]);
    });

}

module.exports.terminals = function (application, req, res) {

    var connection = application.config.dbConnection();
    var terminalModel = new application.app.models.TerminalDAO(connection);

    terminalModel.getAllTerminals(function (error, result) {
        res.json(result);
    });

}

module.exports.insertTerminal = function (application, req, res) {

    var connection = application.config.dbConnection();
    var terminalModel = new application.app.models.TerminalDAO(connection);

    var terminal = req.body;

    terminalModel.insertTerminal(terminal, function (error, resultDB) {
        terminalModel.getTerminal(resultDB.insertId, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.updateTerminal = function (application, req, res) {

    var connection = application.config.dbConnection();
    var terminalModel = new application.app.models.TerminalDAO(connection);

    var id_terminal = req.params.id;
    var terminal = req.body;

    terminalModel.updateTerminal(terminal, id_terminal, function (error, resultDB) {
        terminalModel.getTerminal(id_terminal, function (error, result) {
            res.json(result[0]);
        });
    });

}

module.exports.deleteTerminal = function (application, req, res) {

    var connection = application.config.dbConnection();
    var terminalModel = new application.app.models.TerminalDAO(connection);

    var id_terminal = req.params.id;

    terminalModel.deleteTerminal(id_terminal, function (error, result) {
        res.json(result);
    });

}