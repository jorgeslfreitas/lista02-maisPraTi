const prompt = require('prompt-sync')();

const straightSegments = prompt('Digite 3 segmentos de reta: ').split(' ');

const segments1 = Number(straightSegments[0]);
const segments2 = Number(straightSegments[1]);
const segments3 = Number(straightSegments[2]);

const isTriangle = (seg1, seg2, seg3) => {
    const triangle = seg1 > (seg2 + seg3) || seg2 > (seg1 + seg3) || seg3 > (seg1 + seg2);
    console.log(triangle);
    if (triangle) {
        console.log(`É possível formar um triângulo!`);
    } else {
        console.log(`Não é possível formar um triângulo!`);
    }
}

isTriangle(segments1, segments2, segments3);