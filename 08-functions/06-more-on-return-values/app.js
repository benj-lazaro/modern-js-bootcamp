// More On Return Values Demo

function square(number) {
    return number * number;
    console.log("All done!");   // This statement does NOT get executed
}

console.log(`The square is 4 is ${square(4)}.`);


// Function with 2 return statements
function isPurple(color) {
    if (color.toLowerCase() === "purple") {
        return true;
    } 
    return false;   // This line gets executed ONLY when the above condition evaluates to false
}

console.log(`Is the color purple.. purple? ${isPurple("purple")}.`);
console.log(`Is the color PURPLE.. purple? ${isPurple("PURPLE")}.`);
console.log(`Is the color red.. purple? ${isPurple("red")}.`);

// Function with a return statement returning a boolean value ONLY
// This ONLY works for a single boolean evaluation
function isPurple2(color) {
     return color.toLowerCase() === "purple";   // A boolean expression that evaluates to true or false
}

console.log(`Is the color purple.. purple? ${isPurple2("purple")}.`);
console.log(`Is the color blue.. purple? ${isPurple2("blue")}.`);

// Function with an array argument value
function containsPurple(arr) {
    for(let color of arr) {
        console.log(`Array color is ${color}`);
        if (color.toLowerCase() === "purple" || color.toLowerCase() === "magenta") {
            return true;    // Terminates the entire function & then return the value
        }
    }
    return false;
}

let colorResult = containsPurple(["blue", "pink", "orange", "green", "magenta"]);
console.log(`Color array contains purple or magenra is ${colorResult}.`);