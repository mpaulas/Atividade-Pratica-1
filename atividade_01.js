let salario;
let abono;
const leia = require("readline-sync");

salario = leia.questionFloat("\nDigite o valor do Salario: R$" );
abono = leia.questionFloat("\nDigite o valor do Abono: R$");

novoSalario = salario + abono;

console.log("\nO valor do novo salário é: R$ " + novoSalario.toFixed(2));