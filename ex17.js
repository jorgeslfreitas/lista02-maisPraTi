/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
 */

const prompt = require('prompt-sync')();

let name = [];
let age = [];
let minor = {
    name: [],
    age: []
};

for (let i = 0; i < 3; i++) {
    name.push(prompt('Digite seu nome: '));
    age.push(prompt('Digite sua idade: '));
}

for (ages in age) {
    if (age[ages] < 18) {
        minor.name.push(name[ages]);
        minor.age.push(age[ages]);
    }
}
