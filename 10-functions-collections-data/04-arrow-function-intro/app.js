// Arrow Function Intro

// Regular function expression
const square = function (number) {
    return number * number;
}

// Arrow function expression w/ 1 parameter value
const squareArrowFunc = (number) => {
    return number * number;
}

// Arrow function expression w/ 1 parameter value & ( ) removed
const isEven = number => {
    return number % 2 === 0;
}

// Arrow function expression w/ more than 1 parameter value
const multiply = (x, y) => {
    return x * y;
}

// Arrow function expression w/ NO parameter value
const greet = () => {
    return "Hi there!";
}


// Test Code
console.log("Regular function expression...");
console.log(`square(2) = ${square(2)}`);

console.log("Arrow function expression...");
console.log(`squareArrowFunc(2) = ${squareArrowFunc(2)}`);

console.log(`isEven(4) = ${isEven(4)}`);
console.log(`isEven(5) = ${isEven(5)}`);

console.log(`multiply(5, 4) = ${multiply(5, 4)}`);

console.log(`greet() = ${greet()}`);
