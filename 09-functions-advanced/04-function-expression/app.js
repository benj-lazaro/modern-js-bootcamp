// Function Expression Demo

// Function Declaration
function add(x, y) {
    return x + y;
}

// Anonymous Function Expression
// Since the function has no assigned name, it is also referred as an anonymous function
const sum = function (x, y) {
    return x + y;
}

// Named Function Expression
const product = function multiply(x, y) {
    return x * y;
}

console.log(add(1, 2));     // Calling a declared function
console.log(sum(1, 2));     // Calling an anonymous function expression stored in the variable sum

console.dir(add);           // Reveal details of the function add()... that it is an object
console.dir(sum);           // Reveal details of the underlying object stored in the variable sum

console.log(product(2, 2)); // Calling a named function expression stored in the variable product
