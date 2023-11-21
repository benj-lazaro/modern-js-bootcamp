// Movie Fight Web Application

// Request data from OMDb API
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "eeec100e",
      s: searchTerm,
    },
  });

  // Return the fetched array of movies
  return response.data.Search;
};

// Fetches the user input from text box DOM element
const input = document.querySelector("input");

// Refactor onInput as an async function similar to that of fetchData()
const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  console.log(movies);
};

// Calls debounce() for every keypress then calls onInput() 500ms after the last keypress
input.addEventListener("input", debounce(onInput, 500));
