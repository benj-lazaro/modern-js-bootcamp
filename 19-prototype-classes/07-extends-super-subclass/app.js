// Extends, Super and Subclasses Demo

// Parent or base class
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating!`;
  }
}

// Subclasses that extends methods & propreties from parent class
class Cat extends Pet {
  // Define class Cat specific constructor
  constructor(name, age, livesLeft = 9) {
    // Access the properties defined in the parent class' constructor
    super(name, age);
    this.livesLeft = livesLeft;
  }

  meow() {
    return `${this.name} said "meow"!`;
  }
}

class Dog extends Pet {
  bark() {
    return `${this.name} said "woof"!`;
  }

  // Overrides the parent class' method eat()
  eat() {
    return `${this.name} scarfs down his food.`;
  }
}

const monty = new Cat("Monty", 3);
console.log(monty);
console.log(monty.eat());
console.log(monty.meow());

const wyatt = new Dog("Wyatt", 6);
console.log(wyatt);
console.log(wyatt.eat());
console.log(wyatt.bark());
