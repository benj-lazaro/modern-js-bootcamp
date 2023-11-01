// Multiple Awaits Demo

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

const btn = document.querySelector("button");

async function animateRight(element, amount) {
  try {
    await moveX(element, amount, 1000);
    await moveX(element, amount, 1000);
    await moveX(element, amount, 1000);
    await moveX(element, amount, 1000);
    await moveX(element, amount, 1000);
  } catch (error) {
    console.log(
      "Ran out of available space. Moving to the opposite direction."
    );
    animateRight(btn, -200); // NOTE: NO code for checking on hitting the lefthand side client window
  }
}

animateRight(btn, 200);
