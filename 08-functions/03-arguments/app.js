// Function Arguments Demo

// Example #1

function greet(name) {
    console.log(`Hi there, ${name}!`);
}

greet("Matt");


// Example #2

// Emulate throwing a D6 dice
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;   // Generates a number from 1 to 6
    
    console.log(`Rolled a ${roll}.`);
}

// Emulate throwing 6 x D6 dice
function throwDice(numRolls) {
    for(let startRoll = 0; startRoll < numRolls; startRoll++) {
        rollDie();
    }
}

throwDice(6);
