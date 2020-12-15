var mostrarSite = true;
const site = 'https://klmtech.inf.br/';

console.log('Hello World!');
console.log('Meu nome é Kleiton!');
console.log('E eu estou aprendendo Node.js com o Guia do Programandor');

if(mostrarSite) {
    console.log(site);
}

/*
* Módulos
*/
var calculadora =  require('./calculadora');

console.log(calculadora.soma(10,20));
console.log(calculadora.mult(10,20));
calculadora.nome = 'Calculadora do Kleiton!';
console.log(calculadora.nome);