// Shorthand Object Properties Demo

// Example #1
const getStats = (array) => {
  const max = Math.max(...array);
  const min = Math.min(...array);
  const sum = array.reduce((sum, r) => sum + r);
  const avg = sum / array.length;

  // Shorthand to return an object with properties
  // Takes the variables, use them to both set the object property key name & corresponding value
  return { max, min, sum, avg };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const stats = getStats(reviews);
console.log(stats);

// Example #2
// function pick(array) {
//   const index = Math.floor(Math.random() * array.length);
//   return array[index];
// }

// Randomly select an element from the passed array
const pick = (array) => array[Math.floor(Math.random() * array.length)];

function getCard() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "Q",
    "J",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const value = pick(values);
  const suit = pick(suits);

  // Using shorthand object properties upon returning an object literal containng value & suit values
  return { value, suit };
}
console.log(getCard());
