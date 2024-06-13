const prompt = require('prompt-sync')();

let manSalary = 0;
let womanSalary = 0;
let continues = 's';

do {
    let salaryAndSex = prompt('Digite seu salário e o seu sexo ("m" para masculino e "f" para feminino): ').split(' ');

    if (salaryAndSex[1] === 'm') {
        manSalary += Number(salaryAndSex[0]);
    } else {
        womanSalary +=  Number(salaryAndSex[0]);
    }

    continues = prompt('Caso deseje continuar digite "s" ou "n" para parar! ');
} while (continues == 's' || continues == 'S');

console.log(`O total dos salários dos homens é R$${manSalary.toFixed(2)} e o total dos salários das mulheres é R$${womanSalary.toFixed(2)}`);