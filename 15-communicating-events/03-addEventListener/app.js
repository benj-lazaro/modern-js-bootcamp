// .addEventListener() Demo

const btn = document.querySelector("button");

// Using the .on<property> directly for handling events
// Does NOT provide the option to add another event listener to the targeted element
// The most recent event listener OVERRIDE the previous one
// btn.onclick = () => console.log("You clicked me!");
// btn.onclick = () => console.log("You clicked me the second time!");

// Using .addEventListner()

// Multiple events & event handlers on the same selected element
btn.addEventListener("click", () => alert("First Event"));

btn.addEventListener("click", () => console.log("Second Event"));

btn.addEventListener("mouseover", function () {
  btn.innerText = "Stop Touching Me!";
});

btn.addEventListener("mouseout", function () {
  btn.innerText = "Click Me!";
});

window.addEventListener("scroll", () => console.log("Stop scrolling!"));
