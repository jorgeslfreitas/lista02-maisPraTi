/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

const getRandomIntInclusive = () => {
    const min = 0;
    const max = 99;
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

const arrayRandomNumbers = [];

for (let i = 0; i < 20; i++) {
    arrayRandomNumbers.push(getRandomIntInclusive()); 
}

console.log(arrayRandomNumbers);
console.log(arrayRandomNumbers.sort());