// Hoisting Demo

// Hoisting with variable declared using var
console.log(animal);                // Returns undefined and did not return a ReferenceError
var animal = "Tapir";


// Hosting with variables declared using let & const
// console.log(shrimp);                // Returns a ReferenceError
let shrimp = "Harlequin Shrimp";
// console.log(favoriteMovie);         // Returns a ReferenceError
const favoriteMovie = "Tron";


// Function declaration
howl();                 // Runs as expected regardless the location where the function was declared

function howl() {
    console.log("Awooo!");
}


// Function expression
hoot();                 // Triggers a TypeError
var hoot = function() {
    console.log("Hooo Hooo");
};
