// Altering Styles

const h1 = document.querySelector("h1");
console.log(h1.style);
console.log(h1.style.color);
h1.style.color = "Orchid";

const p = document.querySelector("p");
console.log(p.style);
p.style.color = "White";
p.style.backgroundColor = "Black";
p.style.fontSize = "40px";

// Use a loop to individually change the INLINE style attribute of selected <li> elements
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
const allLis = document.querySelectorAll("li");

// Using a regular for loop
// for (let index = 0; index < allLis.length; index++) {
//   allLis[index].style.color = colors[index];
// }

// Use the .forEach() method
allLis.forEach((li, index) => {
  li.style.color = colors[index];
});
