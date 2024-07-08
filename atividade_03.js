let salarioBruto, adicionalNoturno, horaExtra, desconto, salarioLiquido;
const leia = require("readline-sync");

salarioBruto = leia.questionFloat("\nDigite o Salario Bruto: R$" );
adicionalNoturno = leia.questionFloat("\nDigite o Adicional Noturno: R$");
horaExtra = leia.questionFloat("\nDigite a(s) Hora(s) Extra(s): R$");
desconto = leia.questionFloat("\nDigite o(s) Desconto(s): R$");

salarioLiquido = salarioBruto + adicionalNoturno + (horaExtra * 5) - desconto;

console.log("\nO valor do Salário Liquido é: R$ "+ salarioLiquido.toFixed(2));