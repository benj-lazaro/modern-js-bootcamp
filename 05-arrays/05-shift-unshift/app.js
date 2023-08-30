// .shift() & .unshift() Methods Demo

let dishesToDo = ["big platter"];
console.log("Current array content...")
console.log(`dishesToDo: [${dishesToDo}]`);

// Add new elements (one at a time) at the beginning of the array
console.log("Adding (unshifting) a new element successively at the beginning of the array...");
dishesToDo.unshift("large plate");
dishesToDo.unshift("small plate");
dishesToDo.unshift("cereal bowl");
dishesToDo.unshift("mug");
dishesToDo.unshift("dirty spoon");
console.log("Updated array content...");
console.log(`dishesToDo: [${dishesToDo}]`);

// Add new elements as a chunk at the beginning of the array
// NOTE: The order of the added elements is preserved when passed as an arguement value
console.log("Adding new elements as a chunk at the beginning of the array...");
dishesToDo.unshift("fork", "knife");
console.log("Updated array content...");
console.log(`dishesToDo: [${dishesToDo}]`);

// Remove elements from the beginning of the array
console.log("Removing (shifting) the first element of the array");
removedElement = dishesToDo.shift()
console.log(`Removed Element: ${removedElement}`);

console.log("Removing (shifting) the first element of the array");
removedElement = dishesToDo.shift()
console.log(`Removed Element: ${removedElement}`);

console.log("Removing (shifting) the first element of the array");
removedElement = dishesToDo.shift()
console.log(`Removed Element: ${removedElement}`);

console.log("Removing (shifting) the first element of the array");
removedElement = dishesToDo.shift()
console.log(`Removed Element: ${removedElement}`);

console.log("Removing (shifting) the first element of the array");
removedElement = dishesToDo.shift()
console.log(`Removed Element: ${removedElement}`);

console.log("Updated array content...");
console.log(`dishesToDo: [${dishesToDo}]`);
