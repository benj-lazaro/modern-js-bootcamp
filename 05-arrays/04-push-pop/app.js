// .push() & .pop array methods demo

let topSongs = [
    "First Time Ever I Saw Your Face",
    "God Only Knows",
    "A Day In The Life",
    "Life On Mars"
];

console.log(`Top Song List: ${topSongs}`);

// Add a new elements to the end of the array
console.log("Adding new elements into the array...");
topSongs.push("Fortunate Son");
topSongs.push(true);

console.log(`Top Song List: ${topSongs}`);

// Remove the last element of the array & save returned element into a variable
console.log("Remove last element from the array...");
removedElement = topSongs.pop()

console.log(`Top Song List: ${topSongs}`);
console.log(`Element removed is ${removedElement}`);