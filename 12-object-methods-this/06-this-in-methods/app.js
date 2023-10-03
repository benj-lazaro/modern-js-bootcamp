// Using This In Methods Demo

// 'this' inside a regular function
function sayHi() {
  console.log("Hi");
  console.log(this); // 'this' references the browser's object 'window' (current execution scope)
}

// 'this' inside an object literal
const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    // Destructure the object literal's properties to be referenced by 'this'
    const { first, last, nickName } = this; // 'this' references the object literal ''person'
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName(); // 'this' references the object literal ''person'
    console.log(`${fullName} is a person!`);
  },
};

// Invoke regular function sayHi()
sayHi();

// Invoke the .printBio() method of the object literal 'person'
person.printBio();
