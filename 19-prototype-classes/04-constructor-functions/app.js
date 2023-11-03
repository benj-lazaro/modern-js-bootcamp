// Constructor Functions Demo

// Constructor function
// Implicitly creates a JavaScript object, set its properties & returns an object
function Color(red, green, blue) {
  this.red = red;
  this.green = green;
  this.blue = blue;
}

// Define the methods of the Constructor function
Color.prototype.rgb = function () {
  const { red, green, blue } = this;
  return `rgb(${red}, ${green}, ${blue})`;
};

Color.prototype.hex = function () {
  const { red, green, blue } = this;
  return (
    "#" + ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
  );
};

Color.prototype.rgba = function (alpha = 1.0) {
  const { red, green, blue } = this;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

// Creates a new object using the constructor function
console.log("Instantiate two objects from Constructor function...");
colorOne = new Color(40, 255, 60);
colorTwo = new Color(0, 0, 0);
console.log(colorOne);
console.log(colorTwo);

// Check if the methods of the instantiated objects points to the same area in memory
console.log("Check if methods of objects points to the same area in memory...");
console.log(`.rgb(): ${colorOne.rgb === colorTwo.rgb}`);
console.log(`.hex(): ${colorOne.hex === colorTwo.hex}`);
console.log(`.rgba(): ${colorOne.rgba === colorTwo.rgba}`);

console.log("Access inherited methods...");
console.log(colorOne.rgb());
console.log(colorOne.hex());
console.log(colorOne.rgba(0.8));

// Test on DOM
console.log("Set backgrundColor of body to colorOne.rgba(0.2)");
document.body.style.backgroundColor = colorOne.rgba(0.2);
