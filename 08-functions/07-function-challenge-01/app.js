// Function Challenge 01 Password Validator

// My Solution
// function isValidPassword(password, username) {
//     if (password.length >= 8 && password.indexOf(" ") === -1 && password.indexOf(username) === -1) {
//         return true;
//     }
//     return false;
// }

// Alternative Solution #1: Using variables
// function isValidPassword(password, username) {
//     const notShort = password.length >= 8;
//     const noSpace = password.indexOf(" ") === -1;
//     const noUsername = password.indexOf(username) === -1;

//     if (notShort && noSpace && noUsername) return true

//     return false;
// }

// Alternative Solution #2: Using variables & returning the evaluated boolean value of the conditional statement
function isValidPassword(password, username) {
    const notShort = password.length >= 8;
    const noSpace = password.indexOf(" ") === -1;
    const noUsername = password.indexOf(username) === -1;

    return notShort && noSpace && noUsername
}

// Test Code
console.log(isValidPassword("89Fjj1nms", "dogLuvr"));           // Evaluates to true
console.log(isValidPassword("dogLuvr123!", "dogLuvr"));         // Evaluates to false
console.log(isValidPassword("12345", "anonymous"));             // Evaluates to false
console.log(isValidPassword("01234578", "anonymous"));          // Evaluates to true
console.log(isValidPassword("0123 4578", "anonymous"));         // Evaluates to false
console.log(isValidPassword("0123anonymous4578", "anonymous")); // Evaluates to false
