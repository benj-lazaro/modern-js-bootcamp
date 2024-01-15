document.querySelector("form").addEventListener("submit", (event) => {
  // Prevent default of sending submitted form data to a remote backend server
  event.preventDefault();

  // Encode the message using Base64 encoding
  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  // Generate a URL and append the encoded message
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
