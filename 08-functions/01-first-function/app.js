// First Function Demo

// Function declaration
function grumpus() {
    console.log("ugh... you again...");
    console.log("FOR THE LAST TIME...");
    console.log("LEAVE ME ALONE!");
}

// Function call / execution
grumpus();

// Function call within a for loop
for(let index = 1; index <= 10; index++) {
    console.log(`Function call ${index} within a for loop...`);
    grumpus();
}
