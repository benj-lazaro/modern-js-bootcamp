// Async Demo

// Example #1
async function greet() {
  return "Hello!";
}

greet().then((value) => {
  console.log("Promise resolved with: ", value);
});

// Example #2
async function add(x, y) {
  // Throws an exception for rejected promise
  if (typeof x !== "number" || typeof y !== "number") {
    throw "Both x & y values MUST be numbers";
  }

  return x + y;
}

add(1, 2)
  .then((value) => {
    console.log("The sum is ", value);
  })
  .catch((error) => {
    console.log("Promise reject with: ", error);
  });

add("1", 2)
  .then((value) => {
    console.log("The sum is ", value);
  })
  .catch((error) => {
    console.log("Promise reject with: ", error);
  });
