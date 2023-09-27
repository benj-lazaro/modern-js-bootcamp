// Destructuring Objects

const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};
console.log(runner);

// Destructuring object's properties into individual variables
// Using rest operator to collect the rest of the object's properties
const { first, last, ...others } = runner;
console.log(`First: ${first}`);
console.log(`Last: ${last}`);
console.log(others);

// Assigning a different variable name to a destructured object property
const { country: nation, title: honorific } = runner;

console.log(`Nation: ${nation}`);
console.log(`Honorific: ${honorific}`);
