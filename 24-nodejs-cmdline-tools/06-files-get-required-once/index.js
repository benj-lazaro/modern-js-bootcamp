// Require the 'myscript.js' for the 1st time
const counter = require("./myscript.js");

// Access the functions of the exported object from myscript.js
console.log(counter.getCounter()); // Returns 0
counter.incrementCounter();
console.log(counter.getCounter()); // Returns 1

// Require the same 'myscript.js' file for the 2nd time & assigned to a new variable
const newCounter = require("./myscript.js");

console.log(newCounter.getCounter()); // Returns 1 (instead of 0)
newCounter.incrementCounter();
console.log(newCounter.getCounter()); // Returns 2
