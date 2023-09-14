// High Order Functions Demo

// Declare functions and anonymous function expressions
function add(x, y) {
    return x + y;
}

const subtract = function (x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

const divide = function (x, y) {
    return x / y;
}

// Store functions to an array
const mathOperations = [add, subtract, multiply, divide];

// Hard code access functiond from the array using template literals
console.log(`Sum of 100 and 100:        ${mathOperations[0](100, 100)}`);
console.log(`Difference of 50 and 7:    ${mathOperations[1](50, 7)}`);
console.log(`Product of 2 and 2:        ${mathOperations[2](2, 2)}`);
console.log(`Quotient of 55 and 3:      ${mathOperations[3](55, 3)}`);

// Use for..of loop to iterate through the array of functions
for(let func of mathOperations) {
    let result = func(30, 5);                   // Iterate through the math operations & evaluate the values 30 and 5
    console.log(`${func.name} = ${result}`);
}

// Function stored in an object
const thing = {
    doSomething: multiply       // Property value is a function with the pair of ( ) so that it won't execute
};

// References the object's method .doSomething() which is actually a declared function named multiply
console.log(thing.doSomething(50, 2));

