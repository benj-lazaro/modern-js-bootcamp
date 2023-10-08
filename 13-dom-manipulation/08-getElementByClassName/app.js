// .getElementByClassName() Demo

const header = document.getElementsByClassName("header");
console.log(header);

const special = document.getElementsByClassName("special");
console.log(special);

// Specific search
// Select the targeted element object from the document by its tag name
const ul = document.getElementsByTagName("ul")[0];

// Select the targeted element object from the returned object by its class name
const ulSpecial = ul.getElementsByClassName("special");
console.log(ulSpecial);
