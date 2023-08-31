// .concat() Method Demo
let fruits = ["apple", "banana"];
let veggies = ["asparagus", "brussel sprouts"]
let meats = ["steak", "chicken breast"];

console.log(`fruits array: [${fruits}]`);
console.log(`veggies array: [${veggies}]`);

// Concatenate the two arrays together resulting into a new array
console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

// Concatenate all 3 arrays together
let allFood = fruits.concat(veggies, meats);
console.log(`allFood [${allFood}]`);