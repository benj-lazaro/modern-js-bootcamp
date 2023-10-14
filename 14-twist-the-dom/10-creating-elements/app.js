// Creating Elements Demo

// Create an empty <h2> element
const newH2 = document.createElement("h2");
newH2.innerText = "I like starships!";
newH2.classList.add("special");

// Append the child element to the target parent element in the DOM
const section = document.querySelector("section");
section.appendChild(newH2);

// Create an empty <img> element
const newImg = document.createElement("img");
newImg.src =
  "https://images.unsplash.com/photo-1504006833117-8886a355efbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80";
newImg.style.width = "300px";

// Append the child element to the target parent element in the DOM
const body = document.querySelector("body");
body.appendChild(newImg);

// Create an empty <a> tag
const newA = document.createElement("a");
newA.innerText = "Mr. Bubz Video! CLICK MEEE";
newA.href = "https://www.youtube.com/watch?v=QQNL83fhWJU";

// Append the child element to the target parent element in the DOM
const firstP = document.querySelector("p");
firstP.appendChild(newA);
