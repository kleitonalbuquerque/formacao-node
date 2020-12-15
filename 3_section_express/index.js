const express = require('express'); // Importando o express
const app = express(); // Inciando o express

app.listen(4000,(erro) => {
    if(erro) {
        console.log('Ops, algo deu errado!')
    }else {
        console.log('Servidor rodando...')
    }
})

