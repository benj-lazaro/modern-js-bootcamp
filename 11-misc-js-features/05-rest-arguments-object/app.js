// Arguments Object Demo

function sum() {
  // Use spread to convert arguments into a REAL array
  const argsArray = [...arguments];

  return argsArray.reduce((total, currentValue) => {
    return total + currentValue;
  });
}

console.log("sum(1, 2, 3, 4, 5, 6, 7, 8, 9)");
console.log(`Sum = ${sum(1, 2, 3, 4, 5, 6, 7, 8, 9)}`);
