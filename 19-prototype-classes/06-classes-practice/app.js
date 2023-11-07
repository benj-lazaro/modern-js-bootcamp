// More Classes Practice Demo

class Color {
  constructor(red, green, blue, name) {
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.name = name;
    this.calcHSL(); // Calls the function & immediately attaches the HSL values to the object
  }

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

  hsl() {
    const { hue, saturation, lightness } = this;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  // Sets the saturation level of HSL color to 100%
  fullySaturated() {
    const { hue, lightness } = this;
    return `hsl(${hue}, 100%, ${lightness}%)`;
  }

  // Calculates the opposite HSL color
  opposite() {
    const { hue, saturation, lightness } = this;
    const newHue = (hue + 180) % 360;
    return `hsl(${newHue}, ${saturation}%, ${lightness}%)`;
  }

  // Calculates the HSL values
  calcHSL() {
    // 'let' is used instead of 'const' as values of the variables are being updated
    let { red, green, blue } = this;

    // Make RGB colors fraction of 1
    red /= 255;
    green /= 255;
    blue /= 255;

    // Find the greatest & least channel values
    let colorMin = Math.min(red, green, blue),
      colorMax = Math.max(red, green, blue),
      delta = colorMax - colorMin,
      hue = 0,
      saturation = 0,
      lightness = 0;

    // Calculate hue
    if (delta == 0) hue = 0;
    else if (colorMax == red) hue = ((green - blue) / delta) % 6;
    else if (colorMax == green) hue = (blue - green) / delta + 2;
    else hue = (red - green) / delta + 4;

    hue = Math.round(hue * 60);

    if (hue < 0) hue += 360;

    // Calculate lightness
    lightness = (colorMax + colorMin) / 2;

    // Calculate saturation
    saturation = delta == 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

    // Multiply lightness and saturation by 100
    saturation = +(saturation * 100).toFixed(1);
    lightness = +(lightness * 100).toFixed(1);

    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
  }
}

const tomatoRed = new Color(255, 67, 89, "tomato");
console.log(tomatoRed);
console.log(tomatoRed.rgb());
console.log(tomatoRed.rgba(0.5));
console.log(tomatoRed.hex());
console.log(tomatoRed.hsl());
console.log(tomatoRed.opposite());
console.log(tomatoRed.fullySaturated());

const white = new Color(255, 255, 255, "white");
console.log(white);
console.log(white.rgb());
console.log(white.rgba(0.2));
console.log(white.hex());
console.log(white.hsl());
console.log(white.opposite());
console.log(white.fullySaturated());

const carrot = new Color(230, 126, 34, "carrot");
console.log(carrot);
console.log(carrot.rgb());
console.log(carrot.rgba(0.5));
console.log(carrot.hex());
console.log(carrot.hsl());
console.log(carrot.opposite());
console.log(carrot.fullySaturated());
