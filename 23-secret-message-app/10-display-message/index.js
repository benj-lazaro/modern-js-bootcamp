// Check URL and destructure the hash part from window.location
const { hash } = window.location;

// Replace the hash part with an empty string then & decode the hash
const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");

  document.querySelector("h1").innerHTML = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  // Prevent default of sending submitted form data to a remote backend server
  event.preventDefault();

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  // Encode the message using Base64 encoding
  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);

  // Generate a URL and append the encoded message
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
