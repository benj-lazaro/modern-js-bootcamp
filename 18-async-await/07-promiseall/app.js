// Promise.all() Demo

const printPokemon = (results) => {
  for (let pokemon of results) {
    console.log(`Pokemon: ${pokemon.data.name}`);
    // console.log(pokemon.data);
  }
};

async function get3Pokemon() {
  try {
    // Send requests in parallel to API
    const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
    const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
    const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

    // Await for all promise objects to resolve then save returned values as array elements
    const results = await Promise.all([promise1, promise2, promise3]);

    // Process the returned values of resolved promise objects
    printPokemon(results);
  } catch (error) {
    console.log(`Encountered a "${error.message}"...`);
  }
}

get3Pokemon();
