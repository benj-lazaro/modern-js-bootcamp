// Computed Properties Demo

const role = "host";
const role2 = "directory";
const person = "Jools Holland";
const person2 = "James Cameron";

// Old method of creating an object literal with dynamic key properties
const team = {}; // Creates an empty object literal
team[role] = person; // Adds a property to the object literal, one at a time
team[role2] = person2;
console.log(team);

// New method using computed properties
// It allows to define propertes within an object literal all at once
// It allows to use a complex expression (turns into a string) as property name (key)
const team2 = {
  [role]: person,
  [role2]: person2,
  [1 + 6 + 9]: "sixteen",
};
console.log(team2);

// Copies and returns an object literal with an additional property
// Spread the contents of the passed object literal
// Define the additional property based on the passed key-value arguments using computed properties
// Return the new object literal
const addProperty = (object, key, value) => {
  return { ...object, [key]: value };
};

console.log(addProperty(team, "happy", ":)"));
