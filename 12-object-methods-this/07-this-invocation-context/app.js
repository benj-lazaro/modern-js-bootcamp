// This Invocation Context Demo

// Keyword this inside an object literal's methods
const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this); // Displays the current value of 'this'
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says "Ha Ha Ha Ha"`);
  },
};

// Invoke the .printBio() method of the object literal 'person' normally
// 'this' references its parent object literal 'person'
console.log(person.printBio());

// Invoke the arrow function (method) .laugh() of the object literal 'person'
// 'this' references to the global execution scope object 'window'
// Returns 'undefined says  "Ha Ha Ha Ha"'
console.log(person.laugh());

// Assign the .printBio() method of the object literal 'person' to a variable as reference
const printBio2 = person.printBio;

// Invoke the variable as a stand-alone function
// 'this' now references the global execution scope object 'window'
// Triggers a TypeError since 'this'.fullName() is NOT a function of the global object 'window'
printBio2();
