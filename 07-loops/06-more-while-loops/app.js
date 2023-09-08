// More While Loops Demo

// Generate a target number between 0 to 9
const targetNumber = Math.floor(Math.random() * 10);

// Generate a guessed number
let gussedNumber = Math.floor(Math.random() * 10);

while (gussedNumber !== targetNumber) {
    console.log(`Current Guess Number: ${gussedNumber}`);
    gussedNumber = Math.floor(Math.random() * 10);
    console.log(`New Guess Number: ${gussedNumber}`);
}

console.log(`The number ${targetNumber} has been guessed`);
