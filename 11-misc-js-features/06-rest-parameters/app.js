// Rest Parameters Demo

// Example #1
function sum(...nums) {
  console.log(`nums = [${nums}]`);

  return nums.reduce((total, currentValue) => {
    return total + currentValue;
  });
}
console.log(`sum = ${sum(1, 2, 3, 4, 5, 6, 7, 8, 9)}`);

const multiply = (...nums) =>
  nums.reduce((product, currentValue) => product * currentValue);

console.log(`product = ${multiply(1, 2, 3, 4, 5, 6, 7, 8, 9)}`);

// Example #2
// Collects the first name, last name & an unlimited miscellaneous titles
function fullName(firstName, lastName, ...titles) {
  console.log("First Name", firstName);
  console.log("Last Name", lastName);
  console.log("Titles", titles);
}

console.log(fullName("John", "Wick", "Babayaga", "Boogey Man", "Dog Avenger"));
