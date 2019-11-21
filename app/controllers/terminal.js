module.exports.terminal = function (application, req, res) {

    var connection = application.config.dbConnection();
    var terminalModel = new application.app.models.TerminalDAO(connection);

    var id_terminal = req.params.id;

    terminalModel.getTerminal(id_terminal, function (error, result) {
        if(result){
            res.json(result[0]);
        }
        else{
            res.json({'error': error});
        }
    });

}

module.exports.terminals = function (application, req, res) {

    var connection = application.config.dbConnection();
    var terminalModel = new application.app.models.TerminalDAO(connection);

    terminalModel.getAllTerminals(function (error, result) {
        if(result){
            res.json(result);
        }
        else{
            res.json({'error': error});
        }
    });

}

module.exports.insertTerminal = function (application, req, res) {

    var connection = application.config.dbConnection();
    var terminalModel = new application.app.models.TerminalDAO(connection);

    var terminal = req.body;

    terminalModel.insertTerminal(terminal, function (errorDB, resultDB) {

        if(resultDB.insertId){
            terminalModel.getTerminal(resultDB.insertId, function (error, result) {
                if(result){
                    res.json(result[0]);
                }
                else{
                    res.json({'error': error});
                }
            });
        }else{
            res.json({'error': errorDB});
        }

    });

}

module.exports.updateTerminal = function (application, req, res) {

    var connection = application.config.dbConnection();
    var terminalModel = new application.app.models.TerminalDAO(connection);

    var id_terminal = req.params.id;
    var terminal = req.body;

    terminalModel.updateTerminal(terminal, id_terminal, function (error, resultDB) {
        terminalModel.getTerminal(id_terminal, function (error, result) {
            if(result){
                res.json(result[0]);
            }
            else{
                res.json({'error': error});
            }
        });
    });

}

module.exports.deleteTerminal = function (application, req, res) {

    var connection = application.config.dbConnection();
    var terminalModel = new application.app.models.TerminalDAO(connection);

    var id_terminal = req.params.id;

    terminalModel.deleteTerminal(id_terminal, function (error, result) {
        if(result){
            res.json(result);
        }
        else{
            res.json({'error': error});
        }
    });

}