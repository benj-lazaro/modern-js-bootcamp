// Factory Functions Demo

// Normal functions
function hex(red, green, blue) {
  return (
    "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
  );
}

function rgb(red, green, blue) {
  return `rgb(${red}, ${green}, ${blue})`;
}

// const hexColor = hex(255, 100, 25);
// console.log(hexColor);

// const rgbColor = rgb(255, 100, 25);
// console.log(rgbColor);

// Factory function
// Returns an object that contains the two functions as methods & passed values as properties
function makeColor(red, green, blue) {
  // Creates a new object
  const color = {};

  // Set argument values as properties
  color.red = red;
  color.green = green;
  color.blue = blue;

  // Create methods
  // NO need to pass argument values to the functions since they are stored as properties of the object
  // Use 'this' to access the values stored in the properites
  color.rgb = function () {
    const { red, green, blue } = this;
    return `rgb(${red}, ${green}, ${blue})`;
  };

  color.hex = function () {
    const { red, green, blue } = this;
    return (
      "#" +
      ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
    );
  };

  // Returns the created object
  return color;
}

console.log("Create a new object named 'color'...");
console.log("Assign values red = 255, green = 100, blue = 25");
const color = makeColor(255, 100, 25);
console.log(color);

console.log("Calling .rgb() method...");
console.log(color.rgb());

console.log("Calling .hex() method...");
console.log(color.hex());

console.log("Change the value of red to 120...");
color.red = 120;
console.log(color);

console.log("Calling methods .rgb() & .hex()...");
console.log(color.rgb());
console.log(color.hex());
