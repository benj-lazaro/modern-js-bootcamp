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

const input = document.querySelector("input");
input.addEventListener("input", (event) => {
  fetchData(event.target.value);
});
