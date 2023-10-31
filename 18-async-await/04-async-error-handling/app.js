// Error Handling in Async Functions

// Chaining a .catch() method with an async function
// async function getPlanets() {
//   const resolved = await axios.get("https://swapi.dev/api/planetsa/");
//   console.log(resolved.data.results);
// }

// getPlanets().catch((error) => {
//   console.log(error);
// });

// Using a try & catch block within an async function
async function getPlanets() {
  try {
    const resolved = await axios.get("https://swapi.dev/api/planetsa/");
    console.log(resolved.data.results);
  } catch (error) {
    console.log(error.message);
  }
}

getPlanets();
