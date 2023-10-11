// Getting & Setting Attributes Demo

// Retrieve attribute
const range = document.querySelector('input[type="range"]');
console.log(`max attribute: ${range.getAttribute("max")}`);
console.log(`min attribute ${range.getAttribute("min")}`);
console.log(`step attribute: ${range.getAttribute("step")}`);
console.log(`type attribute ${range.getAttribute("type")}`);
console.log(`lol attribute ${range.getAttribute("lol")}`);

// Set attribute
range.setAttribute("min", "-500");

// Change the attribute type from "range" to "radio"
range.setAttribute("type", "radio");
