/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
    Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
    valores da sequência.

"a1 = 4  a2 = 4+ 2 = 6  a3 = 6 + 2 = 8   a4 = 8 + 2 = 10   a5= 10 + 2 = 12   a6 = 12 + 2 =14"
*/
    

const prompt = require('prompt-sync')();

const firstTermPA = prompt('Digite o primeiro termo e a razão de uma Progressão Aritmética: ').split(' ');

let sumPA = Number(firstTermPA[0]);
let arrayPA = [];

for (let i = 0; i < 10; i++) {
    arrayPA.push(sumPA);
    let reason = Number(firstTermPA[1]);
    sumPA += reason;
}
console.log(...arrayPA);