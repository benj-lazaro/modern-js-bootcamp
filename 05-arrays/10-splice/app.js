// .splice() method demo

let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
console.log(`Animals = [${animals}]`);

// Insert a new element "octopus" after the array element "shark" without deleting anything
console.log("Insert a new element into the array w/o deleting anything...")
animals.splice(1, 0, "octopus");
console.log(`Animals = [${animals}]`);

// Delete two elements "whale" & "bear" from the array
console.log("Delete two elements 'whale' & 'bear' from the array...");
let deletedItems = animals.splice(3, 2);
console.log(`Animals = [${animals}]`);
console.log(`Deleted Items = [${deletedItems}]`);

// Insert multiple elements into the array starting at index 03
console.log("Insert multiple elements into the array...");
animals.splice(3, 0, "snake", "frog");
console.log(`Animals = [${animals}]`);

// Replace existing elements in the array
console.log("Replace array elements 'shark' & 'octopus' with their uppercase versions...");
let replacedItems = animals.splice(0, 2, "SHARK!", "OCTOPUS!");
console.log(`Animals = [${animals}]`);
console.log(`Replaced Items = [${replacedItems}]`);