// Comparing For and For..Of Loops Demo

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 6]
];


// Sum each row of the magic square using a for loop
console.log("Using for loop...");
for(let outer = 0; outer < magicSquare.length; outer++) {
    let rowSum = 0;

    for(let inner = 0; inner < magicSquare[outer].length; inner++) {
        rowSum += magicSquare[outer][inner]
    }

    console.log(`${magicSquare[outer]} summed to ${rowSum}`);
}


// Sum each row of the magic square using a for..of loop
console.log("Using for..of loop...");
for(let row of magicSquare) {
    let rowSum = 0;

    for(element of row) {
        rowSum += element;
    }

    console.log(`${row} summed to ${rowSum}`);
}


// When NOT TO USE for..of
console.log("When NOT to use for..of loop...");

// Iterate & print elements of words1 as well as the corresponding element of words2
const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tub", "berry"];

for (let index = 0; index < words1.length; index++) {
    console.log(`${words1[index]}${words2[index]}`);
}