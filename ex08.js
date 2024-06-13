const prompt = require('prompt-sync')();

const activityHours = Number(prompt('Quantas horas de atividades você fez este mês? '));

const pointsForActivities = (hours) => {
    let points;
    if (hours <= 10) {
        points = hours * 2;
    } else if (hours <= 20) {
        points = hours * 5;
    } else {
        points = hours * 10;
    }

    return points;
}

const totalGain = (pointsForActivities) => {
    return pointsForActivities * 0.05;
}

const points = pointsForActivities(activityHours);
const gain = totalGain(points);

console.log(`De acordo com suas horas de atividades, você ganhou ${points} pontos e faturou R$${gain.toFixed(2)}`);