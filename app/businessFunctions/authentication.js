
function token() { return Math.random().toString(36).substr(2); }

var incorrectPassword = "Senha incorreta!";
var notFoundUser = "Usuário não encontrado!";
var successfullyLogout = "Até a Próxima!";
var noToken = "Não há Token no LocalStorage!";

var incorrectPasswordHint = "Favor verificar a Senha inserida";
var notFoundUserHint = "Favor verificar o Nome de Usuário inserido";
var successfullyLogoutHint = "Logout efetuado com Sucesso";
var noTokenHint = "Não há Token no LocalStorage";

module.exports.token = token;
module.exports.incorrectPassword = incorrectPassword;
module.exports.incorrectPasswordHint = incorrectPasswordHint;
module.exports.notFoundUser = notFoundUser;
module.exports.notFoundUserHint = notFoundUserHint;
module.exports.successfullyLogout = successfullyLogout;
module.exports.successfullyLogoutHint = successfullyLogoutHint;
module.exports.noToken = noToken;
module.exports.noTokenHint = noTokenHint;