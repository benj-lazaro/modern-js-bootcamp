// Determining the value of 'this' demo

// To determine the value of 'this' rule #1
console.log("Rule #1...");
console.log(this); // this = Window object
const printThis = () => {
  console.log(this); // this = Window object
};
printThis();

const kolors = {
  // Define a method
  printColor() {
    console.log(this); // this = printColor() of kolors object

    const printThis = () => {
      console.log(this); // this = printColor() of kolors object
    };
    printThis();
  },
};
kolors.printColor();

// To determine the value of 'this' rule #2
console.log("Rule #2...");
const printValueOfThis = function () {
  console.log(this);
};
printValueOfThis(); // this = Window object
printValueOfThis.call({ color: "red" }); // this = object with property of 'color' & value of 'red'
printValueOfThis.apply({ color: "red" }); // this = object with property of 'color' & value of 'red'

// To determine the value of 'this' rule #3
console.log("Rule #3...");
const colors = {
  // Define method
  printColor() {
    console.log(this); // this = printColor() of color
  },
};
colors.printColor();

const randomObject = {
  a: 7,
};
// Assigns / copies color's printColor() method to randomObject's printColor()
randomObject.printColor = colors.printColor;
randomObject.printColor(); // this = randomObject; since it is the value on the left of the '.' of the method
