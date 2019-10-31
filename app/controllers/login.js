module.exports.login = function (application, req, res) {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    var businessFunctions = application.app.businessFunctions.authentication;

    var user = req.query;

    var check = businessFunctions.login(application, user);

    res.send(check);

}

module.exports.logout = function (application, req, res) {

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    var businessFunctions = application.app.businessFunctions.authentication;

    var user = req.query;

    var check = businessFunctions.logout(application, user);

    res.send(check);

}