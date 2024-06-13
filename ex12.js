/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

let fibonacci1 = 0;
let fibonacci2 = 1;
let fibonacci3;

console.log(fibonacci1);
console.log(fibonacci2);

for (let i = 0; i < 8; i++) {
    fibonacci3 = fibonacci1 + fibonacci2;
    console.log(fibonacci3);
    fibonacci1 = fibonacci2;
    fibonacci2 = fibonacci3;
};