var http = require('http');

http.createServer((req, res) => {
    res.end('<h1>Bem vindo ao meu site!</h1><a href="https://klmtech.inf.br/" target="_blank">KLMTech<a/>');
}).listen(3000);

console.log('Server is run...');