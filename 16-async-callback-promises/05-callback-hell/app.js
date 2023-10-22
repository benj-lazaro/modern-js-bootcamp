// Callback Hell Demo

const btn = document.querySelector("button");

// Move button to the right with set delays (hardcoded)
// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Code refactor
const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const bodyBoundary = document.body.clientWidth;
    const elementRight = element.getBoundingClientRect().right;
    const currentLeft = element.getBoundingClientRect().left;

    if (elementRight + amount > bodyBoundary) {
      onFailure();
    } else {
      element.style.transform = `translateX(${currentLeft + amount}px)`;
      onSuccess();
    }
  }, delay);
};

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 1000, 1000);
//       });
//     });
//   });
// });

moveX(
  btn,
  100,
  1000,
  () => {
    // Success
    moveX(
      btn,
      400,
      1000,
      () => {
        // Success
        moveX(
          btn,
          400,
          1000,
          () => {
            // Success
            moveX(
              btn,
              700,
              1000,
              () => {
                // Success
                console.log("Seriously, do we have available screen left?");
              },
              () => {
                // Failure
                alert("Can NOT move further!");
              }
            );
          },
          () => {
            // Failure
            alert("Can NOT move further!");
          }
        );
      },
      () => {
        // Failure
        alert("Can NOT move further!");
      }
    );
  },
  () => {
    // Failure
    alert("Can NOT move further!");
  }
);
