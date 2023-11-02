// Prototypes

// Accessing the array object prototype
console.log("Access Array.prototype...");
console.log(Array.prototype);

// Create an instance of an array object prototype
console.log("Create an instance of an Array.prototype object...");
const array1 = [1, 2, 3];

// Access inherited methods & properties from Array object prototype
console.log("Inherited methods & properties in [[Prototype]]...");
console.dir(array1);

// Override existing .pop() method of the Array object prototype
console.log("Override Array.prototype method .pop()...");
Array.prototype.pop = () => {
  console.log("I'm sorry, Dave. I can not do that.");
};
console.log("array1.pop(3)");
array1.pop(3);

// Accesing the string object prototype
console.log("Access String.prototype...");
console.log(String.prototype);

// Add a new method to the sting object prototype
console.log("Add a new method .grumpus() to String.prototype...");
String.prototype.grumpus = () => {
  console.log("Go away!");
};

// Create an instance of the string object & call the created method
const cat = "blue";
cat.grumpus();

// Add another method to the sring object prototype
console.log("Add a new method .yell() to the String.prototype...");
String.prototype.yell = function () {
  // 'this' refers to the string value
  return `OMG! ${this.toUpperCase()}!!!`;
};

// Create an instance of the string object & call the created method
const testString = "hello";
console.log(testString.yell());
