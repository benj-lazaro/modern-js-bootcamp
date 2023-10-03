// This Invocation Context Demo

// 'this' inside an object literal
const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName(); // Current execution scope = object literal itself
    console.log(`${fullName} is a person!`);
  },
  laugh: () => {
    // An arrow function is used to define the method
    console.log(this); // Current execution scope = browser's object 'window'
    console.log(`${this.nickName} says "Ha Ha Ha Ha"`);
  },
};

// Invoke the .printBio() method of the object literal 'person'
// Invocation context = <object_literal>.<method_name>()
// Current execution scope = object literal itself
console.log(person.printBio());

// Invoke the .laugh() method of the object literal 'person'; DEFINED as an Arrow Function
// Invocation context = <object_literal>.<method_name>()
// Current execution scope = the browser's global scope object 'window'
// Returns 'undefined says  "Ha Ha Ha Ha"' since .nickName is NOT a property of the object 'window'
console.log(person.laugh());

// Assign the .printBio() method of the object literal 'person' to a variable as reference
const printBio2 = person.printBio;

// Invoke the variable as a regular function
// Invocation context = <function_name>()
// Current execution scope = the browser's global scope object 'window'
// Returns a TypeError since .fullName() is NOT a method of the global scope object 'window'
printBio2();
