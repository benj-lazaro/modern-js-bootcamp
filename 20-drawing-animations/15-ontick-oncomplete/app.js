// Callback Functions in Web App Project

class Timer {
  // Define constructor method; setup instance variables, event listeners & pass callback functions
  constructor(durationInput, startButton, pauseButton, callbacks) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // Check for existence of passed callback functions & then set them up
    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // Instance method to start the timer
  start = () => {
    // If a callback function has been passed, invoke it before starting the timer
    if (this.onStart) {
      this.onStart();
    }

    this.tick(); // Starts the timer immediately w/o the 1 second delay
    this.interval = setInterval(this.tick, 1000);
  };

  // Instance method to compute timer data
  tick = () => {
    // If current time reaches 0 then pause the timer
    if (this.timeRemaining <= 0) {
      this.pause();

      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      // Invokes getter & setter methods
      // The right-hand side of the '=' operator invokes the getter method
      // The evaluated value of the right-hand side is implicitly passed as argument to the setter method
      // The left-hand side of the '=' operator invokes the setter method
      this.timeRemaining = this.timeRemaining - 1;

      if (this.onTick) {
        this.onTick();
      }
    }
  };

  // Helper method getter
  get timeRemaining() {
    return parseFloat(this.durationInput.value); // Get the targeted DOM element's current value
  }

  // Helper method setter
  set timeRemaining(time) {
    this.durationInput.value = time; // Set / update the targeted DOM element's value
  }

  // Instance method to pause / stop the timer
  pause = () => {
    clearInterval(this.interval); // Stop active setInterval() session
  };
}

// Target DOM elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// Instantiate class into an object with optional callback functions
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {
    console.log("Timer just ticked down");
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
