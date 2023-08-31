// .includes() & .indexOf Methods Demo
let ingredients = [
    "water",
    "corn starch",
    "flour",
    "cheese",
    "brown sugar",
    "shrimp",
    "eel",
    "butter"
];

console.log(`ingredients = [${ingredients}]`);

console.log(`Search for "fish" in the ingredients using .includes(): ${ingredients.includes("fish")}`);
console.log(`Search for "flour" in the ingredients using .includes(): ${ingredients.includes("flour")}`);

// Attempt a sub-string search using 'corn' for 'corn starch'
console.log(`Search for "corn" in the ingredients using .includes(): ${ingredients.includes("corn")}`);

// Search starting from index 3 (e.g. "cheese")
console.log(`Search for "water"  in the ingredients using .includes(): ${ingredients.includes("water", 3)}`)

// Using .includes() method as part of the conditional statement
if (ingredients.includes("flour")) {
    console.log("I am gluten free, I cannot eat that.");
}

// Using .indexOf()
console.log(`Index value of "eel": ${ingredients.indexOf("eel")}`);
console.log(`Index value of "cheese": ${ingredients.indexOf("cheese")}`);
console.log(`Index value of "coffee": ${ingredients.indexOf("coffee")}`);

// Return the index value of an element starting from index 5
console.log(`Index value of "cheese" after index 5: ${ingredients.indexOf("cheese", 5)}`);

// Return the index value of an element starting from index 2
console.log(`Index value of "cheese" after index 2: ${ingredients.indexOf("cheese", 2)}`);