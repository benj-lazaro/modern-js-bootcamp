// Function Challenge 02 Average

// My Solution
function avg(arrayNumbers) {
    let sum = 0;
    for (let number of arrayNumbers) {
        sum += number;
    }
    return sum / arrayNumbers.length;
}

// Test Code
console.log(avg([0, 50]));                  // Returns 25
console.log(avg([75, 76, 80, 95, 100]));    // Returns 85.2
