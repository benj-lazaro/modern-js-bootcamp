// Changing Multiple Elements Demo

allLi = document.querySelectorAll("li");
console.log(allLi);

// Retrieve & display the innerText of each <li> elements in the document
for (li of allLi) {
  console.log(`innerText: ${li.innerText}`);
}

// Change the text content of all <li> elements in the document
console.log("Change <li> content using .innerText");
for (li of allLi) {
  li.innerText = "We are the champions!";
}

console.log("Change <li> content using .innerHTML");
for (li of allLi) {
  li.innerHTML = "We are <strong>the champions</strong>!";
}
