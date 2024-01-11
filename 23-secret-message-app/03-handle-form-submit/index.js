document.querySelector("form").addEventListener("submit", (event) => {
  // Prevent default of sending submitted form data to a remote backend server
  event.preventDefault();

  const input = document.querySelector("input");
  console.log(input.value);
});
