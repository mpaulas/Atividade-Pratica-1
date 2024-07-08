let nota1, nota2, nota3, nota4, media;
const leia = require("readline-sync");

nota1 = leia.questionFloat("\nDigite a Nota 1: ");
nota2 = leia.questionFloat("\nDigite a Nota 2: ");
nota3 = leia.questionFloat("\nDigite a Nota 3: ");
nota4 = leia.questionFloat("\nDigite a Nota 4: ");

media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log(`\nA média das notas ${nota1}, ${nota2}, ${nota3}, ${nota4} é: ` + media.toFixed(2));