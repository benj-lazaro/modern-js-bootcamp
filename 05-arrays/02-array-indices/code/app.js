// An array of strings
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

// Array .length property
console.log(
  `There are ${colors.length} colors stored within the colors array. `,
);

// Accessing an array element using its index value
console.log(`The 1st color in the array is ${colors[0]}.`);
console.log(`The 2nd color in the array is ${colors[1]}.`);

// Accessing an array item outside of its length returns 'undefined'
console.log(`The 7th color in the array is ${colors[7]}.`);

// To retrieve the last item in the array using index value of -1
console.log(`The last color in the array is ${colors[colors.length - 1]}`);
