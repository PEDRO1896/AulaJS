document.write("<h1>Aula 02 - Exercício 3 </h1>")

var valor = Number (prompt("Digite o valor da prestação em atraso"));
var juros = Number (prompt("Digite a taxa de juros")); 
var tempo = Number (prompt("Digite o tempo de dias de atraso"));

var parcela = valor + (valor * (juros * juros /100) * tempo);

document.write("<p>O valor da parcela será" + parcela + "</p>");
