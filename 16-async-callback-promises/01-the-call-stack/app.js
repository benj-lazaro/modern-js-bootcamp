// The Call Stack Demo

const multiply = (x, y) => x * y;
const square = (x) => multiply(x, x);
const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

// isRightTriangle calls square()
// square() is pushed unto the Call Stack
// square() calls multiply()
// multiply() is pushed unto the Call Stack
// multiply() returns a value to square() & popped from the Call Stack
// square() returns a value to isRightTriangle() & popped from the Call Stack
// Call Stack is empty
// isRightTriangle() returns a boolean value
// Script terminates
const result = isRightTriangle(3, 4, 5);
console.log(`isRightTriangle(3, 4, 5) = ${result} `);
