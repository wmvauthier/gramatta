
function token() { return Math.random().toString(36).substr(2); }

var incorrectPassword = "Senha incorreta";
var notFoundUser = "Usuário não encontrado";
var successfullyLogout = "Logout efetuado com Sucesso";
var noToken = "Não há Token no LocalStorage";

module.exports.token = token;
module.exports.incorrectPassword = incorrectPassword;
module.exports.notFoundUser = notFoundUser;
module.exports.successfullyLogout = successfullyLogout;
module.exports.noToken = noToken;