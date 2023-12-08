// Utility Functions

// Accepts a callback function & delay value as arguments
const debounce = (callbackFunction, delay = 1000) => {
  let timeoutId;

  // Returns a wrapper function
  return (...arguments) => {
    // Check and execute clearTimeout() if there is an active timeoutId
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Otherwise, create a new timeoutId
    // Execute callback function (e.g. fetchData()) with arguments after the last keypress
    timeoutId = setTimeout(() => {
      callbackFunction.apply(null, arguments);
    }, delay);
  };
};
