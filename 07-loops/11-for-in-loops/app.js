// For..In Loop Demo

// Using for..in to iterate through an object's keys (properties) & compute the total earning

const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTheDecades: 100000
}

console.log("Ken Jenning's Jeopardy gameplay...")
let totalEarning = 0

for (let property in jeopardyWinnings) {
    console.log(`${property}: ${jeopardyWinnings[property]}`)
    totalEarning += jeopardyWinnings[property];
}

console.log(`Total Earnings: $${totalEarning}`);


// Using for..in in an array (NOT RECOMMENDED)
for(let key in [88, 99, 77, 66]) {
    console.log(key);   // Returns the indices (array's property) instead of the element's values
}