// Require the 'myscript.js' for the 1st time
const counterObject = require("./myscript.js");

// Access the functions of the exported object from myscript.js
console.log(counterObject.getCounter()); // Returns 0
counterObject.incrementCounter();
console.log(counterObject.getCounter()); // Returns 1

// Require the same 'myscript.js' file for the 2nd time & assigned to a new variable
const newCounterObject = require("./myscript.js");

console.log(newCounterObject.getCounter()); // Returns 1 (instead of 0)
newCounterObject.incrementCounter();
console.log(newCounterObject.getCounter()); // Returns 2
