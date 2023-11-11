// Reminder on 'this' demo

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
    this.interval = setInterval(this.tick, 1000); // Continue calling tick() method & save session ID to a variable
  };

  tick = () => {
    console.log("tick");
  };

  pause = () => {
    clearInterval(this.interval);
    console.log("pause timer");
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
