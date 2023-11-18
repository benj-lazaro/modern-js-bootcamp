// Movie Fight Web Application

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

// Define debounce function that accepts a callback function & delay value as argument
const debounce = (callbackFunction, delay = 1000) => {
  let timeoutId;

  // Returns a wrapper function
  return (...arguments) => {
    // Check and execute clearTimeout() if there is an active timeoutId
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Otherwise, create a new timeoutId
    // Execute callback function (fetchData()) with arguments, 1000ms after the last keypress
    timeoutId = setTimeout(() => {
      callbackFunction.apply(null, arguments);
    }, delay);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};

// Calls the debounce() on onInput() to prevent API request after every keypress
input.addEventListener("input", debounce(onInput, 500));
