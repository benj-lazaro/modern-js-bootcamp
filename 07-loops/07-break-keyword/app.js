// Break Keyword Demo

// Break statement in for loop
console.log("Break statement in a for loop...")

for(let index = 0; index < 10; index++) {
    console.log(`Index ${index}`);

    if (index === 5) break;
}
console.log("For loop terminated...")


// Break statement in while loop
console.log("Break statement in a while loop...");

const targetNumber = Math.floor(Math.random() * 10);
let guessedNumber = Math.floor(Math.random() * 10);

while(true) {
    console.log(`Target Number: ${targetNumber}\nGuessed Number: ${guessedNumber}`);

    if (guessedNumber === targetNumber) break;
    
    guessedNumber = Math.floor(Math.random() * 10);
}
console.log("While loop terminated...")