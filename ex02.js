const prompt = require('prompt-sync')();

const carSpeed = Number(prompt('Qual a velocidade atual do carro? '));

const isFined = (velocidade) => {
    let fine;
    if (velocidade > 80) {
        fine = (velocidade - 80) * 5;
    } else {
        fine = 0;
    }
    return fine;
}

const fine = isFined(carSpeed);

fine > 0 ? console.log(`Você foi multado em R$${fine},00!`) : console.log(`Você não foi multado!`);

