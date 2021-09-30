var vetor = [a, b, c];

do {
   a = parseFloat(prompt("Digite o primeiro número:"));
    if (isNaN(a)) {
        alert("Entrada inválida!");
    }
} while (isNaN(a))

do {
    b = parseFloat(prompt("Digite o segundo número:"));
    if (isNaN(b)) {
        alert("Entrada inválida!");
    }
} while (isNaN(b))

do {
    c = parseFloat(prompt("Digite o terceiro número:"));
    if (isNaN(c)) {
        alert("Entrada inválida!");
    }
} while (isNaN(c))


function Ordena(a, b, c) {
	var.vetor = [a, b, c];
	vetor.sort();
	return vetor();

}