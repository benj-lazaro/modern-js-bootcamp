// Way NOT To Add Events Demo

// Select the targeted element
const btnClicker = document.querySelector("#clicker");

// Set the corresponding .on<property> of the element
// NOTE: Use console.dir(<element>) to display the list of available properties

// Set an event using the .onclick property & assign corresponding action
btnClicker.onclick = function () {
  console.log("You clicked me. Go away!");
};

// Set another event using the .ondblclick property  & assign corresponding action
btnClicker.ondblclick = () => console.log("You clicked twice.");
