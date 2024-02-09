const express = require("express");

// app object = describes all the different things the web server can do
const app = express();

// Define a route handlers (req = request, res = response)

// Root route GET request
app.get("/", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <input name="passwordConfirmation" placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

// Root route POST request
app.post("/", (req, res) => {
  // The .on() method is identifical to .addEventListener()
  req.on("data", (data) => {
    // NOTE: The following is a manual implementation of retrieving form data from the request body

    // Use .toString() to convert request's buffer object into human-readabley
    const parsed = data.toString("utf8").split("&");

    // To store key-value pairs taken from the array "parsed"
    const formData = {};

    // Split array items of the array "parsed" into a key-value pair
    for (let pair of parsed) {
      const [key, value] = pair.split("=");
      formData[key] = value;
    }

    // Display contents of the "formData" object
    console.log(formData);
  });

  res.send("Account created!");
});

// Listening port
app.listen(3000, () => {
  console.log("Listening...");
});
