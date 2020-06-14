module.exports = (app)=> {

    app.get('/', function(req, resp){
        resp.send(`
        <html>
           <head>
           <meta charset="UTF-8">
               <title>Casa do Código</title>
           </head>
           <body>
               <h1>Casa do código</h1>
           </body>
        </html>
   `);
    });

    app.get('/livros', function(req, resp){
        resp.marko(
            require('../views/livros/lista/lista.marko')
        );
    });
};


