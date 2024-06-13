const prompt = require('prompt-sync')();

const getRandomIntInclusive = () => {
    const min = 1;
    const max = 5;
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

const randomNumbersGame = (choice) => {
    const randomNumber = getRandomIntInclusive();
    console.log(`O computador escolheu o número ${randomNumber}`);
    
    if (randomNumber == choice) {
        console.log('Você acertou o número sorteado');
        return true
    } else {
        console.log('Você errou o número sorteado');
        return false
    }
}
let teste;
do {
    const choice = Number(prompt('Números aleatórios. Digite um número de 1 a 5 para tentar descobrir se o computador sorteou este valor: '));
    teste = randomNumbersGame(choice);
} while (teste == false);