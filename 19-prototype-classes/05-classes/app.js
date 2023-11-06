// Classes Demo

// Define a class
class Color {
  // Add a constructor = immediately executes after it instantiate into an object
  constructor(red, green, blue, name) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.name = name;
  }

  // Define method(s)
  innerRGB() {
    const { red, green, blue } = this;
    return `${red}, ${green}, ${blue}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(alpha = 1.0) {
    return `rgba(${this.innerRGB()}, ${alpha})`;
  }

  hex() {
    const { red, green, blue } = this;
    return (
      "#" +
      ((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)
    );
  }
}

// Instantiate class Color into an object & save it to a variable
const tomatoRed = new Color(255, 67, 89, "tomato");
console.log(tomatoRed);
console.log(tomatoRed.rgb());
console.log(tomatoRed.rgba(0.5));
console.log(tomatoRed.hex());

const white = new Color(255, 255, 255, "white");
console.log(white);
console.log(white.rgb());
console.log(white.rgba(0.2));
console.log(white.hex());
