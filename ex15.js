/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
 */

const prompt = require('prompt-sync')();

const vectorNumbers = [];

for (let i = 1; i <= 10; i++) {
    const enterNumbers = Number(prompt(`Digite o ${i}º número inteiro: `));
    vectorNumbers.push(enterNumbers);
};

console.log(...vectorNumbers);

for (vet in vectorNumbers) {
    if (vectorNumbers[vet] % 2 == 0) {
        console.log(`Par digitado = ${vectorNumbers[vet]} na posição ${vet}`);
    }
}