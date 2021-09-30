var numero1;
var numero2;
var numero3;

do {
   numero1 = parseFloat(prompt("Digite o primeiro número:"));
    if (isNaN(numero1)) {
        alert("Entrada inválida!");
    }
} while (isNaN(numero1))

do {
    numero2 = parseFloat(prompt("Digite o segundo número:"));
    if (isNaN(numero2)) {
        alert("Entrada inválida!");
    }
} while (isNaN(numero2))

do {
    numero3 = parseFloat(prompt("Digite o terceiro número:"));
    if (isNaN(numero3)) {
        alert("Entrada inválida!");
    }
} while (isNaN(numero3))

function Maior(a, b, c) {
    var maior = 0;

    maior = (a >= b) ? a : b;

    maior = (maior >= c) ? maior : c;

    return maior;

}


alert("o maior numero entre " + numero1 + " , " + numero2 + " e " + numero3 + " é o número: " + Maior(numero1, numero2, numero3));



