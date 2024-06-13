const prompt = require('prompt-sync')();

const distanceToTravel = Number(prompt('Digite a distância que quer percorrer em km: '));

const ticketValue = (distance) => {
    let value = 0;
    if (distance <= 200) {
        value = distance * 0.50;
    } else {
        value = distance * 0.45;
    }

    return value;
}

const ticketPrice = ticketValue(distanceToTravel);

console.log(`O valor da passagem será de R$${ticketPrice.toFixed(2)}`); 