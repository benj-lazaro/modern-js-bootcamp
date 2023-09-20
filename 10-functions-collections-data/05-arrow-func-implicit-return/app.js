// Arrow Function Implicit Return Demo

// Example #1
// An arrow function expression with a single parameter value & expression
const square1 = number => {
    return number * number
}

// A compact arrow function expression with a single parameter value & expression
const square2 = number => (
    number * number
);

// An arrow function with a single line implicit return
const square3 = number => number * number;

// Test Code
console.log(square1(10));
console.log(square2(10));
console.log(square3(10));


// Example #2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(`numbers = [${numbers}]`);

// .map() method accepting an anonymous function
const doubles1 = numbers.map(function (number) {
    return number * 2;
})
console.log(doubles1);

// .map() method accepting a normal arrow function
const doubles2 = numbers.map(number => {
    return number * 2;
});
console.log(doubles2);

// .map() method accepting a compact arrow function with an implicit return
const doubles3 = numbers.map(number => number * 2);
console.log(doubles3);

// Using a regular anonymous function
const parityList1 = numbers.map(function (number) {
    if (number % 2 === 0) return "Even"
    return "Odd";
})
console.log(parityList1);

// Using an arrow function
const parityList2 = numbers.map(number => {
    if (number % 2 === 0) return "Even"
    return "Odd";
});
console.log(parityList2);

// Using an arrow function with an implicit return; using a ternary operator for the 1-line expression
const parityList3 = numbers.map(number => number % 2 === 0 ? "Even" : "Odd");
console.log(parityList3);