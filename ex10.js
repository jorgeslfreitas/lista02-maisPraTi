const prompt = require('prompt-sync')();

let continues;
let sum = 0;
let lowerValue = 0;
let average;
let i = 0;
let isPair = 0;

do {
    i++;
    let num = Number(prompt('Digite um número: '));
    sum += num;

    if (lowerValue == 0 || lowerValue > num) {
        lowerValue = num;
    }

    if (num % 2 == 0) {
        isPair++;
    }


    continues = prompt('Caso deseje continuar digite "s" ou "n" para parar! ');
    

} while (continues == 's' || continues == 'S')

average = sum / i;

console.log(`O somatório entre todos os valores é ${sum}`);
console.log(`O menor valor digitado foi ${lowerValue}`);
console.log(`A média entre todos os valores foi de ${average}`);
console.log(`A quantida de valor(es) par(es) digitado(s): ${isPair}`);