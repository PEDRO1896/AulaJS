document.write("<h1>Aula01 - Exercício 1</h1>");

var numero = prompt("Digite um número qualquer")

var numero = Number(numero) * Number(numero);

var quadrado = Number(numero) * Number(numero);
var cubo = Number(numero) * Number(numero) * Number(numero);

document.write("<p> número digitado foi " + numero + "</p>");

document.write("<p style ='color: red' >O quadrado do número é " + quadrado + "</p>")
document.write("<p style ='color: blue' >O cubo do número é " + cubo + "</p>")