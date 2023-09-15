// Functions As Arguments Demo

// Accepts another function as parameter value & execute it twice
function callTwice(func) {
    func();
    func();
}

// Accepts a function & number as parameters then execute the function repeatedly based on the given number
function repeatNTimes(func, repeat) {
    for(let start = 1; start <= repeat; start++) {
        console.log(`Call ${start}: ${func.name}() `);
        func();
    }
}

// Accepts two functions, generate a random number to choose which of the functions will execute
function pickOne(func1, func2) {
    let randomNumber = Math.random();
    
    if (randomNumber < 0.5) {
        func1();
    } else {
        func2();
    }
}

// Typical declared functions
function laugh() {
    console.log("Ha Ha Ha!");
}

function battleCry() {
    console.log("Graagh!");
}

// High Order Functions = functions that accept functions as argument values
console.log("Calling callTwice()...");
callTwice(laugh);
callTwice(battleCry);

console.log("Calling repeatNTimes()...");
repeatNTimes(laugh, 5);
repeatNTimes(battleCry, 5);

console.log("Calling pickOne()...");
pickOne(laugh, battleCry);
