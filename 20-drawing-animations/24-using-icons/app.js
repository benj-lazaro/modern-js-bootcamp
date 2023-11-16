// Using Icons Timer Web App Project

// Target DOM elements
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// Target DOM element of the <circle>
const circle = document.querySelector("circle");

// Retrieve <circle> attribute 'r' & compute the perimeter value
const perimeter = circle.getAttribute("r") * 2 * Math.PI;

// Set the 'stroke-dasharray' attribute & value
circle.setAttribute("stroke-dasharray", perimeter);

// Initialize variable for the duration of the timer
let duration;

// Instantiate Timer class into an object with optional callback functions
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(totalDuration) {
    console.log("Timer started");
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("Timer completed");
  },
});
