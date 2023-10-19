// Input Change Events Demo

// Select the entire form
const form = document.querySelector("#signup-form");

// Select individual form elements
const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

// Data structure that holds the form data
const formData = {};

// Separate individual event listners & callback functions on all form elements
// Keeps in-sync with user input & store form data in a single object

// creditCardInput.addEventListener("input", (event) => {
//   console.log("Credit card changed ", event);
//   formData["creditCard"] = event.target.value;
//   console.log(formData);
// });

// termsCheckbox.addEventListener("input", (event) => {
//   console.log("Terms changed ", event);
//   formData["agreeTerms"] = event.target.checked;
//   console.log(formData);
// });

// veggieSelect.addEventListener("input", (event) => {
//   console.log("Veggie changed ", event);
//   formData["veggie"] = event.target.value;
//   console.log(formData);
// });

// A single event listner & callback function on all form elements
// That uses the element's 'name' attribute as key to store the corresponding value
// Creates an object that stores all form data at once

// Store targeted form element's 'name' attribute in an array
// Iterate through the array to assign the event listener & callback function
for (let input of [creditCardInput, termsCheckbox, veggieSelect]) {
  // NOTE: 'target' refers to the property of the 'event' object
  input.addEventListener("change", ({ target }) => {
    // Desconstruct the 'target' property's sub-properties (name, checked, type, value)
    const { name, type, value, checked } = target;
    // If type is 'checkbox' store the .checked property's value, otherwise store .value property's value
    formData[name] = type === "checkbox" ? checked : value;
    console.log(formData);
  });
}
