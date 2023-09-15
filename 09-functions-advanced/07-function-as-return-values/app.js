// Functions As Return Values Demo

// Example #1
// A function that accepts two numbers representing the min & max age of a child
function makeBetweenFunc(min, max) {

    // An anonymous function that accepts an argument value
    return function (num) {
        // Evaluates the expression age & then returns a boolean expression (true or false)
        return num >= min && num <= max;
    }
}

// A function expression that accepts 2 argument values for the min & max parameter variables
const isChild = makeBetweenFunc(0, 18);

/*
The line above can be explicity rewritten as:
const isChild = function (num) {
    return num >= 0 && num <= 18;
}
*/

// The argument value get passed to the anonymous function
console.log("isChild()...")
console.log(isChild(5));    // Evaluates to true
console.log(isChild(68));   // Evaluates to false
console.log(isChild(1));    // Evaluates to true
console.log(isChild(44));   // Evaluates to false

// A new function expression utilizing the same makeBetweenFunc() with different argument values
console.log("isNineties()...")
const isNineties = makeBetweenFunc(1990, 1999);
console.log(isNineties(1994));
console.log(isNineties(1998));
console.log(isNineties(2001));

// A new function expression utilizing the same makeBetweenFunc() with different argument values
console.log("isNiceWeather()...")
const isNiceWeather = makeBetweenFunc(60, 79);
console.log(isNiceWeather(45));
console.log(isNiceWeather(98));

// Example #2
// A function tht accepts a single number argument (multiplier)
function multiplyBy(number) {
    // Returns an anonymous function that accepts a single argument (multiplicant)
    return function (x) {
        // Returns the product
        return x * number;
    }
}

console.log("triple()...")
const triple = multiplyBy(3);
console.log(triple(5));

console.log("double()...")
const double = multiplyBy(2);
console.log(double(5));

console.log("halve()...")
const halve = multiplyBy(0.5);
console.log(halve(6));
