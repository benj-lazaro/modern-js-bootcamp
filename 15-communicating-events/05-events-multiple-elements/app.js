// Events On Multiple Elements Demo

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const changeColor = function () {
  const h1 = document.querySelector("h1");
  // 'this' refers to the individual object (i.e. box) that has been clicked on
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector("#boxes");

// Create <div> elements with varying backgroundColor based on the array colors
for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);

  // Add an Event Listener
  box.addEventListener("click", changeColor);
}
