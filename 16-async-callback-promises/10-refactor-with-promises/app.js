// Refactor 'Callback Hell' Code With Promises Demo

const btn = document.querySelector("button");

// Create a promise object with setTimeout()
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elementRight = element.getBoundingClientRect().right;
      const currentLeft = element.getBoundingClientRect().left;

      if (elementRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elementRight, amount });
      } else {
        element.style.transform = `translateX(${currentLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

// Using chained promises, arrow functions & implicit returns
// NOTE: Implicit return since each resolved promise uses a single expression
moveX(btn, 100, 1000)
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .then(() => moveX(btn, 100, 1000))
  .catch(({ bodyBoundary, elementRight, amount } = data) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(
      `Current element position is at ${elementRight}px; the additional ${amount}px is too large = ${
        elementRight + amount
      }px.`
    );
  });
