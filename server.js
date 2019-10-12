var http = require('http');

var server = http.createServer(function (req, res) {

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Tecnologia</body></html>");
    } else if (categoria == '/moda'){
        res.end("<html><body>Moda</body></html>");
    } else {
        res.end("<html><body>Teste</body></html>");
    }

    res.end("<html><body>Teste</body></html>");
})

server.listen(3000);