// Movie Fight Web Application

// Make a network request to the OMDb API for the specific movie 'The Avengers'
// IMDb ID taken from previous request for an index operation for movie with the title 'avengers'
const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "eeec100e",
      s: searchTerm,
    },
  });

  // Returns movie data
  console.log(response.data);
};

// Target DOM element for input text field
const input = document.querySelector("input");

// Define variable that will hold setTimeout session ID
let timeoutId;

// Implement a delay for each keypress before sending a request to the OMDb API
const onInput = (event) => {
  // Stops the current timeout session ID for each keypress
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  // Setup a new timeout session ID for each keypress with a delay expressed in milliseconds
  // After the delay on the last keyrepss expires, the request is then sent to the OMDb API
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 1000);
};

// Add Event Listener for 'input' & call to onInput()
input.addEventListener("input", onInput);
