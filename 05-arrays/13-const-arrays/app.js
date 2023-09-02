// Using const with arrays demo

const myEggs = ["brown", "brown"];
console.log("Content of const variable myEggs...");
console.log(`myEggs = [${myEggs}]`)

console.log("Pushing a new item into the array...")
myEggs.push("purple");
console.log(`myEggs = [${myEggs}]`);

console.log("Changing array item at index 0...");
myEggs[0] = "green";
console.log(`myEggs = [${myEggs}]`);

// console.log("Assing a new array to the const variable myEggs...");
// myEggs = ["blue", "pink"];  // Triggers a TypeError; due to the change of reference value (points to a new array)


// Another example
const foods = ["milk"];
console.log("Content of const variable foods...");
console.log(`foods = [${foods}]`);

console.log("Pushing a new item into the array...")
foods.push("chocolate");
console.log(`foods = [${foods}]`);

console.log("Pushing a new item into the front of the array...")
foods.unshift("tortillas");
console.log(`foods = [${foods}]`);

console.log("Popping the food array's content 3 times...")
foods.pop();
foods.pop();
foods.pop();
console.log(`foods = [${foods}]`);