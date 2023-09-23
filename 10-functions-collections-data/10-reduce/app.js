// .reduce() Method Demo

const numbers = [3, 4, 5, 6, 7];

// Return the product of all elements in the array
const product = numbers.reduce((total, currentValue) => total * currentValue);
console.log(product);

/* Step-by-step algorithm of the .reduce() method 

Iteration       total       currentValue
1               3           4
2               12          5
3               60          6
4               360         7 (last element)
5               2520

- The value 2520 is returned by the reducer function

*/
