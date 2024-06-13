/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/

let fibonacci1 = 0;
let fibonacci2 = 1;
let fibonacci3;

let arrayFibonacci = [fibonacci1, fibonacci2];

for (let i = 0; i < 13; i++) {
    fibonacci3 = fibonacci1 + fibonacci2;
    arrayFibonacci.push(fibonacci3);
    fibonacci1 = fibonacci2;
    fibonacci2 = fibonacci3;
};

console.log(...arrayFibonacci);