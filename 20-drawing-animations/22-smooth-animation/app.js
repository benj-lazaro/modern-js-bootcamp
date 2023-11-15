// Smoothing The Animation Timer Web App Project

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

// Initialize variable for the current value of the attribute 'stroke-dashoffset'
let currentOffset = 0;

// Instantiate Timer class into an object with optional callback functions
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer started");
  },
  onTick() {
    circle.setAttribute("stroke-dashoffset", currentOffset);
    // Calculate the value for the attribute 'stroke-dashoffset'
    // The value of 1 refers to 1 pixel
    currentOffset = currentOffset - 1;
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
