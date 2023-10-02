// Introduction To Keyword This

// On a function declaration
function sayHi() {
  console.log("Hi!");
  console.log(this); // Returns the 'window' object; global scople of the browser
}
sayHi();

// On a regular function expression
const greet = function () {
  console.log(this); // Returns the same 'window' objecct
};
greet();
