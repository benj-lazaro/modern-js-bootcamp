// Nested For Loops Demo

// Outer for loop
for(let outerIntex = 1; outerIntex <= 10; outerIntex++) {
    console.log(`Outer ${outerIntex}`);
    // Inner for loop
    for(let innerIndex = 10; innerIndex >= 0; innerIndex -= 2) {
        console.log(`   Inner ${innerIndex}`);
    }
}

// Based from a 4x4 2048 tile board game
const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
]

let totalScore = 0;

// Iterate through individual array elements (outer)
for(let outerIndex = 0; outerIndex < gameBoard.length; outerIndex++) {
    // Iterate through the individual numbers stored within each array element
    let row = gameBoard[outerIndex];
    console.log(`Processing array [${row}]`);

    for(let innerIndex = 0; innerIndex < row.length; innerIndex++) {
        // Add each individual number from each array element (row)
        totalScore += row[innerIndex];
    }
}

console.log(`Total Score" ${totalScore}`);
