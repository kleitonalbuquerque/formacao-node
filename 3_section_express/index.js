const express = require('express'); // Importando o express
const app = express(); // Inciando o express

// rotas
app.get("/", (req, res) => {
    res.send('<h1>Bem vindo ao guia do programador!</h1>');
});

// Parâmetro opcional
app.get("/blog/:artigo?", (req, res) => {

    var artigo = req.params.artigo;

    if(artigo) {
        res.send('<h2>Artigo: ' + artigo + '</h2>');
    }else {
        res.send('<h3>Bem vindo ao meu blog!</h3>');
    }
});

app.get("/canal/youtube", (req, res)=> {
    res.send('<h1>Bem vindo ao meu canal!</h1>');
})

app.get("/ola", (req, res) => {
    res.send('<h1>Oi!</h1>');
});

// Parâmetro
app.get("/ola/:nome/:empresa", (req, res) => {
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    // res.send(req.params.nome);
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send('<h1>Oi ' + nome + ' da/o ' + empresa + '</h1>');
});

// Servidor
app.listen(4000,(erro) => {
    if(erro) {
        console.log('Ops, algo deu errado!')
    }else {
        console.log('Servidor rodando...')
    }
})

