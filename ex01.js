const prompt = require('prompt-sync')();

const cigarrosPorDia = Number(prompt('Quantos cigarros você fuma por dia? '));
const anosFumando = Number(prompt('A quantos anos você fuma? '));

const perdaDeVidaPorFumar = (qtdCigarros, anosFumando) => {
    const perdaDeVidaCigarroSegundos = qtdCigarros * (10 * 60);
    const perdaDeVidaTotal = perdaDeVidaCigarroSegundos * (anosFumando * 365) / 86400;
    return perdaDeVidaTotal.toFixed(0);
}

const perdaDeVida = perdaDeVidaPorFumar(cigarrosPorDia, anosFumando);

console.log(`Ao fumar você perdeu ${perdaDeVida} dias de vida!`);