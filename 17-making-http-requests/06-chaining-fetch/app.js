// Chaining Fetch Requests Demo

// First fetch request = list of first 10 planets in Star Wars
fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code: ${response.status}`);

    console.log("Fetched list of planets [first 10].");
    // Parse promise object as JSON & return it
    return response.json();
  })
  .then((data) => {
    console.log(`First planet name: ${data.results[0].name}`);
    const filmURL = data.results[0].films[0];

    console.log("Fetched 1st planet's 1st associated film.");
    // Second fetch request = 1st planet's associated 1st film URL & return promise object (response)
    return fetch(filmURL);
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code: ${response.status}`);

    // Parse promise object as JSON & return it
    return response.json();
  })
  .then((data) => {
    console.log(`Associated film title: ${data.title}`);
  })
  .catch((error) => {
    console.log("Something went wrong...");
    console.log(error); // error = replaced by the thrown new Error()
  });
