// Getters And Setters Timer Web App Project

class Timer {
  // Define constructor method; setup instance variables and event listeners
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // Instance method to start the timer
  start = () => {
    this.tick(); // Starts the timer immediately w/o the 1 second delay
    this.interval = setInterval(this.tick, 1000);
  };

  // Instance method to compute timer data
  tick = () => {
    // Invokes getter & setter methods
    // The right-hand side of the '=' operator invokes the getter method
    // The evaluated value of the right-hand side is implicitly passed as argument to the setter method
    // The left-hand side of the '=' operator invokes the setter method
    this.timeRemaining = this.timeRemaining - 1;
  };

  // Helper method getter
  get timeRemaining() {
    return parseFloat(this.durationInput.value); // Get the targeted DOM element's current value
  }

  // Helper method setter
  set timeRemaining(time) {
    this.durationInput.value = time; // Set / update the targeted DOM element's value
  }

  // Instance method to pause the timer
  pause = () => {
    clearInterval(this.interval); // Stop active setInterval() session
    console.log("Timer Paused");
  };
}

// Target DOM elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// Instantiate class into an object
const timer = new Timer(durationInput, startButton, pauseButton);
