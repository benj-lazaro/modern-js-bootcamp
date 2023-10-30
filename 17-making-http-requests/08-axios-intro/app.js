// Axios Intro Demo

axios
  .get("https://swapi.dev/api/planets/")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log("In catch callback");
    console.log(error);
  });
