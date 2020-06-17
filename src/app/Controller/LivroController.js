class LivroControlador {

    static rotas() {
        return {
            lista: '/livros',
            cadastro: '/livros/form',
            edicao: '/livros/form/:id',
            delecao: '/livros/:id'
        };
    }

    cadastra() {
        return function(req, resp) {
            console.log(req.body);
            const livroDao = new LivroDao(db);

            const erros = validationResult(req);

            if (!erros.isEmpty()) {
                return resp.marko(
                    templates.livros.form,
                    {
                        livro: req.body,
                        errosValidacao: erros.array()
                    }
                );
            }

            livroDao.adiciona(req.body)

                // agora o redirecionamento é feito utilizando o método
                // estático que encapsula as URLs das rotas.
                .then(resp.redirect(LivroControlador.rotas().lista))
                .catch(erro => console.log(erro));
        };
    }

    edita() {
        return function(req, resp) {
            console.log(req.body);
            const livroDao = new LivroDao(db);

            livroDao.atualiza(req.body)

                // agora o redirecionamento é feito utilizando o método
                // estático que encapsula as URLs das rotas.
                .then(resp.redirect(LivroControlador.rotas().lista))
                .catch(erro => console.log(erro));
        };
    }

    // restante do código omitido.
}

module.exports = LivroControlador;
