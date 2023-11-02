const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})
test("One dollar should be 146.3 yens", () => {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(3);
    const expected = 3 * 146.3;
    const expectedRounded = expected.toFixed(1);
    expect(fromDollarToYen(3)).toBe(expectedRounded);
})

test("One yen should be 0.0055 pounds", function(){
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(540);
    const expected = 540 * 0.0055;
    expect(fromYenToPound(540)).toBe(expected);

})