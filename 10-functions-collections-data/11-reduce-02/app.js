// .reduce() Method Demo

// Example #1
const grades = [87, 64, 96, 88, 92, 88, 99, 73, 70, 64];
console.log(`grades = [${grades}]`);

// Returns the highest grade in the array
const maxGrade1 = grades.reduce((maxValue, currentValue) => {
  if (currentValue > maxValue) return currentValue;
  return maxValue;
});
console.log(`maxGrade1 = ${maxGrade1}`);

// Using .reduce() method along with Math.max() to return the highest grade in the array
const maxGrade2 = grades.reduce((maxValue, currentValue) =>
  Math.max(maxValue, currentValue)
);
console.log(`maxGrade2 = ${maxGrade2}`);

// Using .reduce() method along with Math.max() to return the lowest grade in the array
const minGrade = grades.reduce((minValue, currentValue) =>
  Math.min(minValue, currentValue)
);
console.log(`minGrade = ${minGrade}`);

// Example 2
const num = [10, 20, 30, 40, 50];
console.log(`num = [${num}]`);

// Using .reduce() method to sum up the numbers in an array BUT passing an initial value of 1000
const sum = num.reduce(
  (sumTotal, currentValue) => sumTotal + currentValue,
  1000
);
console.log(`sum = ${sum}`);
