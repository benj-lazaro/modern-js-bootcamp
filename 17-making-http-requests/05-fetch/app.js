// .fetch() Demo

fetch("https://swapi.dev/api/planetsa")
  .then((response) => {
    // Check for unsuccessful HTTP request then trigger .cetch()
    if (!response.ok) throw new Error(`Status Code: ${response.status}`);

    response.json().then((data) => {
      for (let planet of data.results) {
        console.log(planet.name);
      }
    });
  })
  .catch((error) => {
    console.log("Something went wrong...");
    console.log(error); // error = replaced by the thrown new Error()
  });
