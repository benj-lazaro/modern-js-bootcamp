// .getComputedStyles() Demo

// Read the current style of <h1> element using getComputedStyle()
const h1 = document.querySelector("h1");
const compStyles = getComputedStyle(h1);

// Return the current 'color' CSS property
console.log(compStyles.color);

// Return the current 'font-size' css property
console.log(compStyles.fontSize);
