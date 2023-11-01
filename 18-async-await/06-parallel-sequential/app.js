// Parallel VS Sequential Requests Demo

// Sequential requests using multiple awaits within an async function
// async function get3Pokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

// Parallel requests #1
async function get3Pokemon() {
  // Request data from API in parallel
  const promise1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const promise2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const promise3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  // Display status of respective promise objects
  console.log(promise1);
  console.log(promise2);
  console.log(promise3);
  // Await for the returned promise objects then save the respective values to variables
  const poke1 = await promise1;
  const poke2 = await promise2;
  const poke3 = await promise3;
  console.log(poke1.data);
  console.log(poke2.data);
  console.log(poke3.data);
}

get3Pokemon();

// Parallel requests #2
function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

// All 4 promises are processed in parallel
// Visually see the result of the last call to changeBodyColor()
async function lightShow() {
  const promise1 = changeBodyColor("pink", 1000);
  const promise2 = changeBodyColor("violet", 1000);
  const promise3 = changeBodyColor("orchid", 1000);
  const promise4 = changeBodyColor("purple", 1000);
  await promise1;
  await promise2;
  await promise3;
  await promise4;
}

lightShow();
