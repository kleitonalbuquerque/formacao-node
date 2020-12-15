const express = require('express'); // Importando o express
const app = express(); // Inciando o express

// rotas
app.get("/", (req, res) => {
    res.send('<h1>Bem vindo ao guia do programador!</h1>');
});

app.get("/blog", (req, res) => {
    res.send('<h3>Bem vindo ao meu blog!</h3>');
});

app.get("/canal/youtube", (req, res)=> {
    res.send('<h1>Bem vindo ao meu canal!</h1>');
})

app.listen(4000,(erro) => {
    if(erro) {
        console.log('Ops, algo deu errado!')
    }else {
        console.log('Servidor rodando...')
    }
})

