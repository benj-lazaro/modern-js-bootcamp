// The Event Object Demo

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

const changeColor = function (event) {
  console.log(event);
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");

  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);

  box.addEventListener("click", changeColor);
}

const body = document.querySelector("body");
body.addEventListener("keypress", function (event) {
  // console.log(event);
  console.log(
    `You have pressed the key ${event.key} with charcode ${event.code}`
  );
});
