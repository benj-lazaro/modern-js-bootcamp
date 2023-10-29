// Refactoring Fetch Chains Demo

// Separate repeated code into their own (anonymous) arrow functions

// Check HTTP request & parse returned promise object in JSON format
const checkStatusAndParse = (response) => {
  if (!response.ok) throw new Error(`Status Code: ${response.status}`);
  return response.json();
};

// Accept returned promise object & print out individual planet's planet name
const printPlanets = (data) => {
  console.log("Planet Name Listing:");

  for (let planet of data.results) {
    console.log(planet.name);
  }

  // Create a resolved promised object & return it with the current promise object (data) as argument
  // This will help fetch the next list of planets using the promised object's .next property
  return Promise.resolve(data.next);
};

// Fetch the a list of 10 planets
// url is based on the API URL for the list
// Suceeding list is based on the promised object returned by the function expression printPlanet
const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return fetch(url);
};

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((error) => {
    console.log("Something went wrong...");
    console.log(error);
  });
