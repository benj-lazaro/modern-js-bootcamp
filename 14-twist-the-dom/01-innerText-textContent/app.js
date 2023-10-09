// .innerText & .textContent Demo
// .innerText & .textContent Demo

// .innerText as a getter
const h1 = document.querySelector("h1");
console.log(h1);
console.log(h1.innerText);

const ul = document.querySelector("ul");
console.log(ul);
console.log(ul.innerText);

const bodyText = document.body.innerText;
console.log(bodyText);

const p = document.querySelector("#main");
console.log(p.innerText);

// .innerText as a setter
h1.innerText = "I am hungry!";
ul.innerText = "List\n be\n gone!\n";

// .textContent as a getter
console.log(p.textContent);

// .textContent as a setter
h1.textContent = "I am NOT hungry!";
