// Destructuring Parameters

const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

// Destructuring objects in a function
function print(person) {
  const { first, last, title } = person;
  console.log(`${first} ${last}, ${title}`);
}
print(runner);

// Destructuring parameters for objects
// Pass the object's property name(s) instead of the entire object w/in the function's parameter list
function print2({ first, last, title }) {
  console.log(`${first} ${last}, ${title}`);
}
print2(runner);

const response = ["HTTP/1.1", "200 OK", "application/json"];
// Destructuring parameters for arrays
// Pass the variable name for the corresponding array element w/in the function's parameter list
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
parseResponse(response);
