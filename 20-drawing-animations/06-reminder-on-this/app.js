// Reminder on 'this' demo

class Timer {
  constructor(durationInput, startButton, pauseButton) {
    // Define instance variables (properties)
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    // this = returns the DOM element attached to the event listener 'click'
    // It does NOT provide access to the instance variables & methods of the class
    this.startButton.addEventListener("click", this.start);
  }

  start() {
    // this = returns the instance of the class Timer
    // It provides access to the instance variables & methods of the class
    console.log(this);
  }
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// Instantiate class into an object
const timer = new Timer(durationInput, startButton, pauseButton);

// Invoke the object's start() method
timer.start();
