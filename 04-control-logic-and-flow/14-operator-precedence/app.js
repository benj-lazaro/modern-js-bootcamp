// Operator Predence Demo

// The && operator has higher precedence than || operator
let x = 7;
result = x == 7 || x === 3 && x > 10
console.log(result);                    // Evaluates to true

// Override opreator precedence
result = (x == 7 || x === 3) && x > 10
console.log(result);                    // Evaluates to false