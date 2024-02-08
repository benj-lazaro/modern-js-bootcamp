const express = require("express");

// app object = describes all the different things the web server can do
const app = express();

// Define a route handler; req = request, res = response

// GET request for the root route
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

// POST request for the root route
app.post("/", (req, res) => {
  res.send("Account created!");
});

// Define port 3000 to listen requests from
app.listen(3000, () => {
  console.log("Listening...");
});
