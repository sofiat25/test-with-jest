
const sum = (a, b) => {
    return a + b;
}

console.log(sum(7,3));



const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;

}
const fromDollarToYen = (valueInDollar) => {
    let valueInYenRaw = valueInDollar * 146.3;
    let valueInYen = valueInYenRaw.toFixed(1);
    return valueInYen;
}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen * 0.0055;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };