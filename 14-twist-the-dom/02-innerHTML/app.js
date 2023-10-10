// .innerHTML Demo

// Get difference between innerHTML VS innerText
const ul = document.querySelector("ul");
console.log(ul.innerText);
console.log(ul.innerHTML);

// Set content of the <form> element
const form = document.querySelector("form");
console.log(form.innerHTML);
form.innerHTML = "Form Begone!";
console.log(form.innerHTML);

// Add an HTML element into the updated <form> element; effectively replacing the previous content
form.innerHTML = "<b>I am a bold tag<b>";

// Set difference between innerHTML vs innerText; w/o overwriting the current content
const h1 = document.querySelector("h1");
h1.innerHTML += " is cool";
h1.innerHTML += "<b>!!!!!!</b>";
h1.innerText += "<b>!!!!!!</b>";
