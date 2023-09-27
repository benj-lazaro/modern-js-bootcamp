// Nested Destructuring Demo

// Array of objects, ordered by finishing position (i.e. gold, silver, bronze)
const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States",
  },
];

// Method #1
// Destructuring an array of objects
// Destruct the 1st runner object's first name properyt & then use a different variable name
// Destruct the 2nd runner object's country property & assign to variable name country

// const [{ first: goldWinner }, { country }] = results;
// console.log(`Gold winner's first name: ${goldWinner}`);
// console.log(`2nd runner's country: ${country}`);

// Another method of performing nested destruturing based on the given example
// Destruct the object element from the array
// Then destruct  the object property from the object

// Method #2
// Destruct the 2nd runner object & assign it to the variable name silverMedal
// Then destruct the country property from object stored in the variable silverMedal
const [, silverMedal] = results;
const { country } = silverMedal;
console.log(`2nd runner's country: ${country}`);
