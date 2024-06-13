const prompt = require('prompt-sync')();

console.log('Aluguel de Carros');

const infoRentCars = prompt('Informe o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos km foram percorridos: ').split(' ');



const rentalCarBilling = (info) => {
    const rentalCarType = info[0];
    const rentalDays = info[1];
    const kmTraveled = info[2];

    const commonCarValue = 90.00;
    const luxCarValue = 150.00;
    let charge = 0;

    if (rentalCarType == 'popular') {
        if (kmTraveled <= 100) {
            charge = (commonCarValue * rentalDays) + (kmTraveled * 0.20);
        } else {
            charge = (commonCarValue * rentalDays) + (kmTraveled * 0.10);
        }
    } else {
        if (kmTraveled <= 200) {
            charge = (luxCarValue * rentalDays) + (kmTraveled * 0.30);
        } else {
            charge = (luxCarValue * rentalDays) + (kmTraveled * 0.25);
        }
    }

    return charge;

}

const valueCharge = rentalCarBilling(infoRentCars);

console.log(`O valor a ser cobrado pelo aluguel de carro será de R$${valueCharge.toFixed(2)}`);