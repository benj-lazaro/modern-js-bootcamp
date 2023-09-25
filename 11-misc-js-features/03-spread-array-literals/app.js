// Spread In Array Literals Demo

// Example #1
const cephalopods = [
  "dumbo octopus",
  "humboldt squid",
  "flamboyant cuttlefish",
];
const gastropods = ["giant african snail", "banana slug", "variable neon slug"];
const cnidaria = ["fire coral", "moon jelly"];
console.log(`cephalopods = [${cephalopods}]`);
console.log(`gastropods = [${gastropods}]`);
console.log(`cnidaria = [${cnidaria}]`);

// Combine elements of cephalopods & gastropods
const mollusca = [...cephalopods, ...gastropods];
console.log(`mollusca = [${mollusca}]`);

// Combine new elements along with elements from cephalopods & gastropods
const mollusca2 = ["garden slug", ...cephalopods, ...gastropods];
console.log(`mollusca2 = [${mollusca2}]`);

// Combine all elements of the three arrays into a new array
const invertebrates = [...cnidaria, ...gastropods, ...cephalopods];
console.log(`invertebrates = [${invertebrates}]`);

// New copy of the array cephalopods
const cephCopy = [...cephalopods];
console.log(`cephCopy = [${cephCopy}]`);
console.log(`cephCopy === cephalopods = ${cephCopy === cephalopods}`);

// Example #2
const stringArray = ["abc", "def", "hello!"];
console.log(`stringArray = [${stringArray}]`);

// Spread string elements into their individual characters & then add each as an element into the new array
const stringArray2 = [..."abc", ..."def", "hello!"];
console.log(`stringArray2 = [${stringArray2}]`);
