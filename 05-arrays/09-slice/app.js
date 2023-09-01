// .slice() method demo

let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
console.log(`Animals = [${animals}]`);

// Copy animals categorized as swimmers from the array using a start & end index 
let swimmers = animals.slice(0, 3);
console.log(`Swimmers = [${swimmers}]`);

// Copy animals categorized as mammals from the array using a start & end index
let mammals = animals.slice(2, 4);
console.log(`Mammals = [${mammals}]`);

// Copy animals categorized as repites from the array using a start index
let reptiles = animals.slice(4);
console.log(`Reptiles = [${reptiles}]`);

// Copy animals categorized as quadrupeds from the array using a negative inclusive end index
let quadrupeds = animals.slice(-3);
console.log(`Quadrupeds = [${quadrupeds}]`);

// Copy the entire array into a new one
let animals2 = animals.slice();
console.log(`Animals2 = [${animals2}]`);