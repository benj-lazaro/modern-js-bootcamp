// Key Events Demo

// Example #1
const input = document.querySelector("#username");

// Key event 'keydown'
input.addEventListener("keydown", function (event) {
  console.log(`Key Down: ${event.key}`);
});

// Key event 'keyup'
input.addEventListener("keyup", function (event) {
  console.log(`Key Up: ${event.key}`);
});

// Key event 'keypress'
input.addEventListener("keypress", function (event) {
  console.log(`Keypressed: ${event.key}`);
});

// Example #2
// Select the corresponding target elements from the document
const addItemInput = document.querySelector("#addItem");
const itemUL = document.querySelector("#items");

addItemInput.addEventListener("keypress", function (event) {
  // Check if ENTER has been pressed
  if (event.key === "Enter") {
    // Check if item is empty, return the cursor to the input text field
    if (!this.value) return;

    // Extract the value of the user's input
    const newItemText = this.value;

    // Create an <li> element & then assign corresponding text content
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;

    // Append the newly created <li> to the parent <ul> element
    itemUL.append(newItem);
    // itemUL.appendChild(newItem);

    // Clear the input value
    this.value = "";
  }
});
