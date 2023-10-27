// XMLHttpRequests The Basics Demo

// Create a XHR object
const firstRequest = new XMLHttpRequest();

// Attach an Event Listener for successful request
firstRequest.addEventListener("load", function () {
  console.log("It worked!");
  // Parse the received JSON object
  const data = JSON.parse(this.responseText);

  // Iterate through individual elements stored in the .results property
  for (let ship of data.results) {
    console.log(ship.name);
  }
});

// Attach an Event Listener for successful request
firstRequest.addEventListener("error", () => {
  console.log("Error!");
});

// Setup the HTTP Request & target URL
firstRequest.open("GET", "https://swapi.dev/api/starships");

// Send the request handled by the browser (NOT JavaScript)
firstRequest.send();
console.log("Request Sent.");
