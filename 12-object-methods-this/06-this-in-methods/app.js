// Using This In Methods Demo

function sayHi() {
  console.log("Hi");
  console.log(this);
}

sayHi(); // Prints the string & returns a reference to the global 'window' object of the browser

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    // Destructure object's properties to be referenced by keyword 'this'
    // Prevents repeatedly using 'this' keyword explicitly on each property
    // console.log(`${this.first} ${this.last} a.k.a ${this.nickName}`);
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName(); // Calls the object's .fullName() method
    console.log(`${fullName} is a person!`);
  },
};

console.log(person.printBio()); // Calls the object's .printBio() method
