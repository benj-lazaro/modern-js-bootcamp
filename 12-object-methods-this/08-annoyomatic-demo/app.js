// Annoyomatic Demo

// Run code on the browser's JavaScript console

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
    // Randomly pick a phrase from the object literal's property 'phrases'
    const { phrases } = this;
    const index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },
  start() {
    // Instantaneously add the '.timerId' as a property to the object literal 'annoyer'
    // The window.SetInterval() returns an ID no. that will be used to stop the current interval
    this.timerId = setInterval(() => {
      // Using an arrow function, the value of 'this' references to the object literal 'annoyer'
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    // window.clearInterval() accesses the '.timerId' property of the object literal 'annoyer'
    // Stops the running interval
    clearInterval(this.timerId);
    console.log("Phew! Thank heavens that is over.");
  },
};
