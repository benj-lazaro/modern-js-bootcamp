// For Loop Demo

// Repeat "Hello" with current index value 10 times
for (let i = 1; i <= 10; i++) {
    console.log(`Hello: ${i}`);
}

// Repeat "Hi there" with current index with internvals of 3
for (let index = 1; index <=10; index+=3) {
    console.log(`Hi there: ${index}`);
}

// Generate a list of perfect squares
for (let num = 1; num<= 20; num++) {
    console.log(`${num} x ${num} = ${num * num}`);
}

// Generate a list that starts at 50 until 0 with intervals of 10
for (let num = 50; num >= 0; num -= 10) {
    console.log(num);
}

// Generate a list that starts at 200 until 0 with intervals of 25
for (let num = 200; num >= 0; num -= 25) {
    console.log(num);
}