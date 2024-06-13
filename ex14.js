/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

const prompt = require('prompt-sync')();

const names = [];

for (let i = 0; i < 7; i++) {
    const enterNames = prompt('Digite um nome: ');
    names.push(enterNames);
}

console.log(...names);
console.log(...names.reverse());