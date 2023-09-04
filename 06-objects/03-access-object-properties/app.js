// Accessing Object Properites Demo

// Example #1
const numbers = {
    100: "one hundred",
    16: "sixteen",
    "76 trombones": "great song"
};

// Accessing object property of 100
console.log("Accessing object property 100...")
console.log("Passing the key 100 to [] to access the property 100...")
console.log(numbers[100]);

console.log("Accessing object property 100...")
console.log("Passing the key '100' to [] to access the property 100...")
console.log(numbers['100']);

// Accessing object property "76 trombones"
console.log("Accessing object property '76 trombones'...");
console.log(numbers['76 trombones']);


// Example #2
const palette = {
    red: "#eb4d4b",
    yellow: "#f9ca24",
    blue: "#30335b"
};

console.log(palette);

console.log("Accessing property 'red'...");
console.log(palette.red);

console.log("Accessing property 'blue'...")
console.log(palette.blue);

// Using a variable (binding) with the object property assigned to it
console.log("Accessing property 'yellow' by passing it as a value to a variable...")
let mysteryColor = "yellow";
console.log(`let mysteryColor = ${mysteryColor};`);
console.log(`Accessing palette[mysteryColor]`);
console.log(palette[mysteryColor]);
