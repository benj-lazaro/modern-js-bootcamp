// Spread In Object Literats Demo

const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  family: "Caninae",
  furry: true,
  legs: 4,
};
console.log("feline object");
console.log(feline);
console.log("canine object");
console.log(canine);

// Copy properties of existing object literals and add additional key-value pairs (properties)
const dogs = {
  ...canine,
  isPet: true,
  adorable: true,
};
console.log("dog object");
console.log(dogs);

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: "unpredictable",
};
console.log("houseCat object");
console.log(houseCat);

// Combine existing object literals with an identical key-value pair (e.g. legs)
// Later object literal (feline) override the entire properties of the former object literal (canine)
const catDog = {
  ...canine,
  ...feline,
};
console.log("catDog object");
console.log(catDog);

// Clone an existing object literal into a new object
// NOTE: Equality check using === opereator results to false; each refers to a different object in memory
const catDogClone = {
  ...catDog,
};
console.log("catDog object");
console.log(catDogClone);

// Combine existing object literals with an identical key but have different values (e.g. legs)
// The position where the ... is positioned matters
const tripod = {
  ...canine,
  legs: 3,
};
console.log("tripod object");
console.log(tripod); // tripod's leg property value overrides that of canine's

const tripod1 = {
  legs: 3,
  ...canine,
};
console.log("tripod1 object");
console.log(tripod1); // canine's leg property value overrides that of tripod's

// Spreading an object literal in an array
const stuff = [..."Hello", { ...catDog }];
console.log("array stuff");
console.log(stuff);
