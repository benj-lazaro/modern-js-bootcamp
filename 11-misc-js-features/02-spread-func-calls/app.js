// Spread in Function Calls

// Example #1
const numbers = [45, 23, 35, 7, 5];
console.log(`numbers = [${numbers}]`);

// Spread breaks up the iterable (array) into individual arguments values for Math.max()
const maxResult = Math.max(...numbers);
console.log("Using spread to pass an array as argument value to Math.max()...");
console.log(`maxResult = ${maxResult}`);

// Example #2
function giveMeFour(a, b, c, d) {
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(`c = ${c}`);
  console.log(`d = ${d}`);
}

console.log(`giveMeFour(4, 5, 6, 7) = `);
console.log(giveMeFour(4, 5, 6, 7));

// Spreading an array literal as argument value
const colors = ["red", "orange", "yellow", "green"];
console.log(`colors = [${colors}]`);
console.log(`giveMeFour(...colors) = `);
console.log(giveMeFour(...colors));

// Spreading a string literal as argument value
const str = "GOAT";
console.log(`GOAT = ${str}`);
console.log(`giveMeFour(...str)`);
console.log(giveMeFour(...str));
