// Dice Roll Function Demo

// Emulate throwing a D6 dice
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;   // Generates a number from 1 to 6
    
    console.log(`Rolled a ${roll}.`);
}

// Emulate throwing 6 x D6 dice
function throwDice() {
    for(let start = 0; start < 6; start++) {
        rollDie();
    }
}

throwDice();