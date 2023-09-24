// Default Parameters Demo

// Default parameter the old way
function multiply1(x, y) {
  if (typeof y === "undefined") {
    y = 1;
  }
  return x * y;
}

console.log("Default parameter value, the old way...");
console.log(`2 x 2 = ${multiply1(2, 2)}`);
console.log(`10 x <no_value> = ${multiply1(10)}`);

// Default parameter the new way
function multiply2(x, y = 1) {
  return x * y;
}
console.log("Default parameter value, the new way...");
console.log(`2 x 2 = ${multiply2(2, 2)}`);
console.log(`10 x <no_value> = ${multiply2(10)}`);

// Default parameter the new way using arrow function with implicit return
const multiply3 = (x, y = 1) => x * y;
console.log("Default parameter value, the new way using arrow function...");
console.log(`2 x 2 = ${multiply3(2, 2)}`);
console.log(`10 x <no_value> = ${multiply3(10)}`);

// INCORRECT: Assigning a default value on the 1st parameter
// JavaScript will interpret the remaining parameter(s) as undefined
const multiply4 = (x = 1, y) => x * y;
console.log(`<no_value> x 10 = ${multiply4(10)}`);

// Multiple default parameters using arrow function with implicit return
const greet = (person, greeting = "Hi", punctuation = "!") => {
  console.log(`${greeting}, ${person}${punctuation}`);
};
greet("Spaz");
greet("Mr. Wick", "Do enjoy your party", ".");
greet("Spongebob", "Oy", "?");
greet("Tim", "Yo");
greet("Anya", "?", "Uy"); // Incorrect oreder of default parameter value placeholder

// Default parameter value using an array as the default value
const blah = (x, y = [1, 2, 3]) => console.log(x, y);
console.log(blah(10));
console.log(blah(10, 20));
