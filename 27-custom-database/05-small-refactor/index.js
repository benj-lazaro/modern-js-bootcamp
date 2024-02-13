const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// To have the middleware function available to every route handler
app.use(bodyParser.urlencoded({ extended: true }));

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
  console.log(req.body);
  res.send("Account created!");
});

// Listening port
app.listen(3000, () => {
  console.log("Listening...");
});
