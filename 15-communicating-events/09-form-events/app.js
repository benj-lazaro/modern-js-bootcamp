// Form Events .preventDefault() Demo

// Prevent the default behavior of submitting form data to a server & refreshing the web page
// Select the entire form
const form = document.querySelector("#signup-form");

// Select individual form elements
const creditCardInput = document.querySelector("#creditcard");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

// Add an Event Listener to the form to prevent default data submittion
form.addEventListener("submit", function (event) {
  alert("Form Submitted");
  // Extract user-submitted data from individual form elements
  console.log("Credit Card: ", creditCardInput.value);
  console.log("Terms: ", termsCheckbox.checked);
  console.log("Veggie: ", veggieSelect.value);
  event.preventDefault();
});
