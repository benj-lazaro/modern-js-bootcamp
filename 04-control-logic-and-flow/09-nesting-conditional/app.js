// Nested conditionals demo

let password = "kitty";

if (password.length >= 6) {                 // Check length of string using the property 'length'
    if (password.indexOf(' ') === -1) {     // Checks for the existence of a blank space; positive number = there is a space
        console.log("Valid Password!");
    } else {
        console.log("Password is long enough but cannot contain spaces.")
    }
} else {
    console.log("Password MUST be longer!");
}