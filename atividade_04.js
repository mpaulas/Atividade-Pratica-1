let n1, n2, n3, n4, diferenca;
const leia = require("readline-sync");

n1 = leia.questionFloat("\nDigite o Numero 1: ");
n2 = leia.questionFloat("\nDigite o Numero 2: ");
n3 = leia.questionFloat("\nDigite o Numero 3: ");
n4 = leia.questionFloat("\nDigite o Numero 4: ");

diferenca = (n1 * n2) - (n3 * n4);


console.log(`\nA Diferença dos Números ${n1}, ${n2}, ${n3}, ${n4} é: ` + diferenca.toFixed(2));