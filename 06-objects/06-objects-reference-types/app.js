// Objects Reference Types

// Constant variable palette stores a reference that points to the actual object in memory
const palette = {
    red: "#eb4d4b",
    blue: "#f9ca24",
    yellow: "#30336b"
};

// Constant variable palette2 stores the same reference that palette has
const palette2 = palette;

console.log("const variable palette = ");
console.log(palette);

console.log("const variable palette2 = ");
console.log(palette2);

console.log("Adding a new property 'green' in the referenced object stored in palette2...");
palette2.green = "#ebf876";

console.log("const variable palette = ");
console.log(palette);

console.log("const variable palette2 = ");
console.log(palette2);

// Both palette & palette2 are update since they're both pointing to the same object in memory
console.log("Both variables palette & palette2 have been updated since they're pointing to the same object...");
