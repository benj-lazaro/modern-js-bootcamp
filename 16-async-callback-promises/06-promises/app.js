// Promise Demo

// Creating a Promise object
const willGetYouADog = new Promise((resolve, reject) => {
  const randNumber = Math.random();
  console.log(`Current random number value: ${randNumber}`);

  if (randNumber < 0.5) {
    resolve();
  } else {
    reject();
  }
});

console.log(willGetYouADog);

// Interacting with the promise object

// .then() method runs when the promise object is resolved
// .catch() method runs when the promise object is rejected
willGetYouADog
  .then(() => {
    console.log("Got a dog.");
  })
  .catch(() => {
    console.log("Nope. No dog.");
  });
