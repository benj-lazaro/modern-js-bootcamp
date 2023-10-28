// Chaining XMLHttpRequests Demo

const firstRequest = new XMLHttpRequest();

// Attach associated Event Listners for the 1st request
firstRequest.addEventListener("load", function () {
  console.log("Request #1 Successful!");
  const data = JSON.parse(this.responseText);

  // Fetch the associated film URL of the 1st planet
  const filmURL = data.results[0].films[0];

  // Create a new XHR object
  const filmRequest = new XMLHttpRequest();

  // Attach associated Event Listners for the 2nd request
  filmRequest.addEventListener("load", function () {
    console.log("Request #2 Successful!");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData.title);
  });

  filmRequest.addEventListener("error", (event) => {
    console.log("Request #2 Error! ", event);
  });

  // Send 2nd request
  filmRequest.open("GET", filmURL);
  filmRequest.send();
  console.log("Request #2 Sent.");
});

firstRequest.addEventListener("error", (event) => {
  console.log("Request #1 Error!", event);
});

// Send 1st request
firstRequest.open("GET", "https://swapi.dev/api/planets");
firstRequest.send();
console.log("Request #1 Sent.");
