// .getElementByTagName() Demo

// Select an element object based on the tag name
const inputs = document.getElementsByTagName("input");
console.log(inputs);

// Use indices to access a specific object element from the HTMLCollection
console.log("Accessing 1st element...");
console.log(inputs[0]);

// Use .length property to determine the number of element objects returned
console.log(`Inputs has ${inputs.length} elements`);

// Iterator over using for..of loop
for (let input of inputs) {
  console.log(input);
  console.log(input.value);
}

// Convert HTMLCollection into an array using ... (spread) operator
const inputArray = [...inputs];
console.log(inputArray);

const p = document.getElementsByTagName("p");
console.log(p);

const li = document.getElementsByTagName("li");
console.log(li);
