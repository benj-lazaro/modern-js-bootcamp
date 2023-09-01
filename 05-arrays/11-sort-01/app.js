// .sort() method demo

// Array of names
let people = ["Mrs. Robinson", "Angie", "Jolene", "Maggie May", "Roxanne"];
console.log(`People = [${people}]`);

// Sort array of people
console.log("Sort array elements of names...");
people.sort();
console.log(`People = [${people}]`);

// Array of numbers
let nums = [34, 10, 100000, 67, 99];
console.log(`Nums = [${nums}]`);

// Sort array of numbers
// NOTE: Numbers are converted to strings & then sorted according to their UTF-16 character codes
console.log("Sort array of numbers...");
nums.sort();
console.log(`Nums = [${nums}]`);