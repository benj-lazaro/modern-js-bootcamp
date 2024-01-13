document.querySelector("form").addEventListener("submit", (event) => {
  // Prevent default of sending submitted form data to a remote backend server
  event.preventDefault();

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  document.querySelector("#link-input").value = encrypted;
});
