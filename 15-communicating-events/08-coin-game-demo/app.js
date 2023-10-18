// Coin Game Demo

// Collission detection
function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

// Movement functions
const moveVertical = (element, amount) => {
  const currentTop = extractPosition(element.style.top);
  element.style.top = `${currentTop + amount}px`;
};

const moveHorizontal = (element, amount, face_direction) => {
  const currentLeft = extractPosition(element.style.left);
  element.style.left = `${currentLeft + amount}px`;
  element.style.transform = `scale(${face_direction},1)`;
};

// Exract & implicitly return the numerical value
const extractPosition = (position) => {
  if (!position) return 100;
  return parseInt(position.slice(0, -2));
};

// Randomly relocate the coin anywhere within the window's inner height & width
const moveCoin = () => {
  const x_coordinate = Math.floor(Math.random() * window.innerWidth);
  const y_coordinate = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y_coordinate}px`;
  coin.style.left = `${x_coordinate}px`;
};

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");

// Randomly place the coin anywhere in the document's window
moveCoin();

// Control the 'player' avatar on the document
window.addEventListener("keyup", function (event) {
  if (event.key === "ArrowDown" || event.key === "Down") {
    moveVertical(player, 50);
  } else if (event.key === "ArrowUp" || event.key === "Up") {
    moveVertical(player, -50);
  } else if (event.key === "ArrowRight" || event.key === "Right") {
    moveHorizontal(player, 50, 1);
  } else if (event.key === "ArrowLeft" || event.key === "Left") {
    moveHorizontal(player, -50, -1);
  }

  // Check if the 'player' avatar has touched the coin's boundaries
  if (isTouching(player, coin)) moveCoin();
});
