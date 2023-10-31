// Await Demo

// Regular function using Axios
// function getPlanets() {
//   return axios.get("https://swapi.dev/api/planets/");
// }

// getPlanets().then(({ data }) => {
//   console.log(data.results);
// });

// Async function with await using Axios
async function getPlanets() {
  const resolved = await axios.get("https://swapi.dev/api/planets/");
  console.log(resolved.data.results);
}

getPlanets();
