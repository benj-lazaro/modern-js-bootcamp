// Timer Web Application Class Definition

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
    this.interval = setInterval(this.tick, 50);
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
      this.timeRemaining = this.timeRemaining - 0.05;

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
    this.durationInput.value = time.toFixed(2); // Updates the DOM element's value; rounded to 2-decimal places
  }

  // Instance method to pause / stop the timer
  pause = () => {
    clearInterval(this.interval); // Stop active setInterval() session
  };
}
