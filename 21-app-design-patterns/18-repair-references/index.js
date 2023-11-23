// Movie Fight Web Application

// Request data from OMDb API
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "eeec100e",
      s: searchTerm,
    },
  });

  // Check if the fetched data has an 'Error' property present & return an empty array
  if (response.data.Error) {
    return [];
  }

  // Return the fetched array of movies
  return response.data.Search;
};

// Target the root element of the autocomplete widget
const root = document.querySelector(".autocomplete");

// Generate HTML code for the root element
root.innerHTML = `
  <label><b>Search For A Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results">
      </div>
    </div>
  </div>
`;

// Target elements from the generated innerHTML value of the root variable
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");

// Refactor onInput as an async function similar to that of fetchData()
const onInput = async (event) => {
  const movies = await fetchData(event.target.value);

  // Enable dropdown in preparation for adding each movie entry as a dropdown menu item
  dropdown.classList.add("is-active");

  // Iterate through the returned array (i.e. movies)
  for (let movie of movies) {
    // Retrieve movie poster & title; write each to their corresponding DOM element
    const option = document.createElement("a");
    option.classList.add("dropdown-item");

    option.innerHTML = `
      <img src="${movie.Poster}" />
      ${movie.Title}
    `;

    // Append the each movie entry as a child element to resultsWrapper
    resultsWrapper.appendChild(option);
  }
};

// Calls debounce() for every keypress then calls onInput() 500ms after the last keypress
input.addEventListener("input", debounce(onInput, 500));
