// DOMcentric Approach Web App Project

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  start = () => {
    this.tick(); // Invoke tick() method immediately in order to start the timer immediately
    this.interval = setInterval(this.tick, 1000); // Calling tick() & save session ID to a variable
  };

  tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value); // Pull current timer value from DOM element
    this.durationInput.value = timeRemaining - 1; // Update timer value of DOM element
  };

  pause = () => {
    clearInterval(this.interval); // Stop active setInterval() session
    console.log("Timer Paused");
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
