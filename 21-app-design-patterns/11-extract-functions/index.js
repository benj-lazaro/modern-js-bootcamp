// Extracting Utility Functions Movie Fight Web Application

const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "eeec100e",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const input = document.querySelector("input");

// Fetches the user input from text box DOM element
const onInput = (event) => {
  fetchData(event.target.value);
};

// Calls the debounce() on onInput() to prevent API request after every keypress
input.addEventListener("input", debounce(onInput, 500));
