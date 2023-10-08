// .querySelector() Demo

// Select 1st element instance by tag name & attribute
const h1 = document.querySelector("h1");
console.log(h1);

const p = document.querySelector("p");
console.log(p);

const input = document.querySelector("input");
console.log(input);

const password = document.querySelector("input[type='password']");
console.log(password);

// Select 1st element instance by id name
const starship = document.querySelector("#starship-photo");
console.log(starship);

const main = document.querySelector("#main");
console.log(main);

// Select 1st element instance by class name (and tag name combo)
const special = document.querySelector(".special");
console.log(special);

const liSpecial = document.querySelector("li.special");
console.log(liSpecial);

// Select 1st element in a nested selector
const peas = document.querySelector("section li.special");
console.log(peas);

// .querySelectorAll() Demo
const allInputs = document.querySelectorAll("input");
console.log(allInputs);

const allSpecial = document.querySelectorAll(".special");
console.log(allSpecial);

const allLi = document.querySelectorAll("li");
console.log(allLi);

const allMain = document.querySelectorAll("#main");
console.log(allMain);
