// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


// declaramos una funcion con el mismo nombre "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 127.90;
    return valueInYen;
}

const fromYenToPound = function (valueInYen) {
    let valueInPound = valueInYen * 0.8;
    return valueInPound;
}
console.log(fromEuroToDollar(3.5))
console.log(fromDollarToYen(fromEuroToDollar(3.5)));
console.log(fromYenToPound(fromDollarToYen(fromEuroToDollar(3.5))));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };