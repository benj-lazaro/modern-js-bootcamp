// Timer Web App Project

// Define class
class Timer {
  constructor(durationInput, startButton, pauseButton) {
    // Define instance variables (properties)
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // Set event listeners on passed DOM elements
    this.startButton.addEventListener("click", this.start);
  }

  // Define instance methods
  start() {
    console.log("Time to start timer!");
  }
}

// Target DOM elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// Instantiate class into an object
const timer = new Timer(durationInput, startButton, pauseButton);
