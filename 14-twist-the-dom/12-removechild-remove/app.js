// .removeChild(), .remove() Demo

// Removing a child element using .removeChild()
const ul = document.querySelector("section ul");
const targetChild = ul.querySelector(".special");
ul.removeChild(targetChild);

// Removing a child element using .remove()
const h1 = document.querySelector("h1");
h1.remove();
