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

  // Iterate through the fetched array, retrieve poster and movie title
  // Place the retrieved data into a <div> element
  for (let movie of movies) {
    const div = document.createElement("div");
    div.innerHTML = `
      <img src="${movie.Poster}" />
      <h1>${movie.Title}</h1>
    `;

    // Target DOM element with ID 'target' & attached the retrieve data
    document.querySelector("#target").appendChild(div);
  }
};

// Calls debounce() for every keypress then calls onInput() 500ms after the last keypress
input.addEventListener("input", debounce(onInput, 500));
