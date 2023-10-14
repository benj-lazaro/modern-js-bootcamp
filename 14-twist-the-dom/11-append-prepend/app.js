// .append(), .prepend() & .insertBefore() Demo

// Insert created element using .insertBefore() method
const parentUl = document.querySelector("ul");

const newLi = document.createElement("li");
newLi.innerText = "I am a new element";
newLi.classList = "todo";

const firstLi = document.querySelector("li.todo");
parentUl.insertBefore(newLi, firstLi);

const alltLi = document.querySelectorAll("li.todo");
const lastLi = alltLi[3];
parentUl.insertBefore(newLi, lastLi);

// Insert created element using .insertAdjacentElement() method
const newI = document.createElement("i");
newI.innerText = "I am Italics!!!";

const firstP = document.querySelector("p");
firstP.insertAdjacentElement("afterend", newI);

// Append created elements after the targeted element using .append()
firstP.append(newI, newLi);

// Append create elements before the targeted element using .prepend()
firstP.prepend(newI, newLi);
