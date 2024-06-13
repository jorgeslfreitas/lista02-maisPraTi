const prompt = require('prompt-sync')();

const getRandomIntInclusive = () => {
    const min = 1;
    const max = 3;
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result == 1) {
        console.log('Computador escolheu pedra(1)');
    } else if (result == 2) {
        console.log('Computador escolheu papel(2)');
    } else {
        console.log('Computador escolheu tesoura(3)');
    }
    return result;
}

const gameJokenpo = (choice) => {

    const randomJokenpo = getRandomIntInclusive();

    if (randomJokenpo == choice) {
        return console.log('Empate');
    }
    const userVictory = (choice == 1 && randomJokenpo == 3) || (choice == 2 && randomJokenpo == 1) || (choice == 3 && randomJokenpo == 2);

    if (userVictory) {
        return console.log('Você venceu!');
    } else {
        return console.log('Você perdeu!');
    }
}

let continueGame = 'y';

do {
    const choiceJokenpo = prompt('Escolha: pedra(1), papel(2) ou tesoura(3): ');
    gameJokenpo(choiceJokenpo);
    continueGame = prompt("Caso deseje continuar o jogo digite 'y' : ");
} while (continueGame == 'y');