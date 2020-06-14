
const app = require('./src/config/custom-express');

app.listen(3000, function () {
    console.log(`Servidor rodando`);
});


//const http = require('http');
//
//const servidor = http.createServer(function(req, resp){
//
//    resp.end(`<html>
//        <head>
//        <meta charset="UTF-8">
//            <title>Casa do Código</title>
//        </head>
//        <body>
//            <h1>Casa do código</h1>
//        </body>
//        </html>
//    `)
//});

//servidor.listen(3000);

