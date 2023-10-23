// Returing Promises From Functions Demo

// const willGetYouADog = new Promise((resolve, reject) => {
//   const randNumber = Math.random();
//   console.log(`Current random number value: ${randNumber}`);

//   if (randNumber < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// willGetYouADog
//   .then(() => {
//     console.log("Got a dog.");
//   })
//   .catch(() => {
//     console.log("Nope. No dog.");
//   });

// Function that returns a promise
const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randNumber = Math.random();

      if (randNumber < 0.5) {
        resolve();
      } else {
        reject();
      }
    }, 5000);
  });
};

makeDogPromise()
  .then(() => {
    console.log("Got a dog.");
  })
  .catch(() => {
    console.log("Nope. No dog.");
  });
