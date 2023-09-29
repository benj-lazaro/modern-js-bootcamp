// Adding Methods To Objects Demo

const math = {
    numbers: [1, 2, 3, 4, 5],
    add: function (x, y) {
        return x + y;
    },
    multiply: function (x, y) {
        return x * y;
    }
};

console.log(math);

// Accessing methods .add() & .multiply() of the object literal math
console.log(`math.add(10, 20) = ${math.add(10, 20)}`);
console.log(`math.multiply(5, 5) = ${math.multiply(5, 5)}`);

// Accessing property .number of the object literal math
console.log(`math.numbers = ${math.numbers}`);
