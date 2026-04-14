function Exemplo11()
{
    let valor = Number (document.getElementById("valor").value);
    let minutos = Number (document.getElementById("minutos").value);
    let quilometros = Number (document.getElementById("quilometros").value);

    let resultado;

    resultado = (valor*quilometros) + (minutos*0.50);

    document.getElementById("resultado").innerHTML = "<p> O valor total da corrida é: " + resultado +"</p>";
 
};
