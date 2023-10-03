// Introduction To Keyword This

// On a regular function declaration
function sayHi() {
  console.log("Hi!");
  console.log(this); // Returns an object referring tot the current execution scope = 'window' object
}
sayHi();

// On a regular function expression
const greet = function () {
  console.log(this); // Returns the same 'window' objecct
};
greet();
