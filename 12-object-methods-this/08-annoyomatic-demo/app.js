// Annoyomatic Demo

// 'this' inside an object literal
const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, Won't Stop",
  ],
  pickPhrase() {
    const { phrases } = this; // 'this' current execution scope = object literal 'annoyer'
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  // start() is a method of object literal 'annoyer'; current execution scope = object literal 'annoyer'
  start() {
    // setInterval() is a function of browser's object 'window'; current execution scope = 'window'
    // setInterval()'s receives an Arrow Function as the 1st argument
    // Arrow function's 'this' value is altered by the .start() method's current exection scope
    // setInterval() returns an ID that is saved in a property named timerId of the object literal 'annoyer'
    this.timerId = setInterval(() => {
      // 'this' of the timerId property's current execution scope = object literal 'annoyer'
      console.log(this.pickPhrase()); // 'this' current execution scope = object literal 'annoyer'
    }, 3000);
  },
  // stop() is a method of object literal 'annoyer'; current execution scope = object literal 'annoyer'
  stop() {
    // clearInterval() is a function of browser's object 'window'; current execution scope = 'window'
    // clearInterval() requires an ID to stop the ongoing internval set by setInterval()
    // clearInterval() accesses the ID from the object literal's property timerId to stop the interval
    clearInterval(this.timerId); // 'this' current execution scope = object literal 'annoyer'
    console.log("Phew! Thank heavens that is over.");
  },
};
