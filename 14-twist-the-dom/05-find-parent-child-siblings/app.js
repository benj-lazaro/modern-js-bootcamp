//Finding Parent Children Siblings Demo

// .parentElement property
const firstLi = document.querySelector("li");
console.log(firstLi); // Returns the <li> element
console.log(firstLi.parentElement); // Returns the <ul> element
console.log(firstLi.parentElement.parentElement); // Returns the <body> element
console.log(firstLi.parentElement.parentElement.parentElement); // Returns the <html> element
console.log(firstLi.parentElement.parentElement.parentElement.parentElement); // Returns null

// children property
const ul = document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]); // Returns first child element of <ul>
console.log(ul.children[0].innerText); // Returns the inner text of the 1st <li> child element

// nextElementSibling property
console.log(firstLi.nextElementSibling); // Returns the 2nd <li> child element
console.log(firstLi.nextElementSibling.nextElementSibling); // Returns the 3rd <li> child element
const thirdLi = firstLi.nextElementSibling.nextElementSibling;

// previousElementSibling property
console.log(firstLi.previousElementSibling); // Returns 'null' since it is the 1st <li> child element
console.log(thirdLi.previousElementSibling); // Returns the 2nd <li> child element
console.log(thirdLi.previousElementSibling.previousElementSibling); // Returns the 1st <li> child element
