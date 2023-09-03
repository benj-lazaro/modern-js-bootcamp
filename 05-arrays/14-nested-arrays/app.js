// Nested Array Demo

let animalPairs = [
    ["doe", "buck"],
    ["ewe", "ram"],
    ["peahen", "peacock"]
];

console.log(`animalPairs = [${animalPairs}]`);

console.log("Access the 3rd sub-array's 1st element...")
console.log(animalPairs[2][0]);

console.log("Access the 2nd sub-array's 2nd element...")
console.log(animalPairs[1][1]);

console.log("Replace the 1st sub-array's 2nd item")
console.log(`animalPairs[0][1] = [${animalPairs[0][1]}] with "stag"...`)
animalPairs[0][1] = "stag";
console.log(`animalPairs = [${animalPairs}]`);
