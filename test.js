// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One yen should be 537.1800000000001", function(){
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(4.2)).toBe(537.1800000000001);
})

test("One pound should be 429.7440000000001", function(){
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(537.1800000000001)).toBe(429.7440000000001);
})