// Nested conditionals demo
let password = "kitty";

// Checks the length of string
if (password.length >= 6) {
  // Checks for a whitespace character; returns a -1 if there is none
  if (password.indexOf(" ") === -1) {
    console.log("Valid Password!");
  } else {
    console.log("Password is long enough but cannot contain spaces.");
  }
} else {
  console.log("Password MUST be longer!");
}
