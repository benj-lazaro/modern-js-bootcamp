// Array Element Modification

let shoppingList = ["Cheddar Cheese", "2% Milk"];
console.log(`Initial Shopping List: ${shoppingList}`);

// Update / override initial value of the 2nd array element with a new value
shoppingList[1] = "Whole Milk";

// Add new items to the array using the array's .length property as index value
// This will always add new items to the end of an array
shoppingList[`${shoppingList.length}`] = "Ice Cream";
shoppingList[`${shoppingList.length}`] = "Frozen Pizza";
shoppingList[`${shoppingList.length}`] = "Fresh Mochi";

console.log(`Final Shopping List: ${shoppingList}`);