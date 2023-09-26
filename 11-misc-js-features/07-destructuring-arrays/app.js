// Destructuring Arrays Demo

// Array of 2016 men's marathon olympics winners (in order)
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];
console.log(`Race Results = [${raceResults}]`);

// Unpack elements of the array & assign them to their corresponding variables
// Based on the element's position within the array
const [goldMedalist, silverMedalist, bronzeMedalist] = raceResults;
console.log(`Gold Medalist: ${goldMedalist}`);
console.log(`Silver Medalist: ${silverMedalist}`);
console.log(`Bronze Medalist: ${bronzeMedalist}`);

// Select specific elements from the array
const [first, , , , fourth] = raceResults; // Skip over element at index 1, 2, 3
console.log(`First Place: ${first}`);
console.log(`Fourth Place: ${fourth}`);

// To collects the first and the rest of the elements from the array
const [winner, ...others] = raceResults;
console.log(`Winner: ${winner}`);
console.log(`Others: ${others}`);
