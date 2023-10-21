// Asynchronous Callbacks Demo

console.log("I happen first!");

// JS interpreter does NOT wait for this line to complete; immediately proceeds to the next console.log statement
setTimeout(() => {
  console.log("I happen third!");
}, 3000);

console.log("I happen second!");
