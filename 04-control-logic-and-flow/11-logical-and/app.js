// Example 1
let password = "chickenGal";

if (password.length >= 8 && password.indexOf(' ') === -1) {     // true if length >= 8 and no blank space
    console.log("Valid password");
} else {
    console.log("Invalid password.");
}


// Example 2
let num = 2;

if (num >= 1 && num <= 10) {
    console.log("Number is between 1 and 10");
} else {
    console.log("Please enter a number between 1 and 10")
}