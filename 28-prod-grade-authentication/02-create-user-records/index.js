const express = require("express");
const bodyParser = require("body-parser");
const usersRepo = require("./repositories/users");

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
app.post("/", async (req, res) => {
  // Destructure request body & assign values to corresponding variables
  const { email, password, passwordConfirmation } = req.body;

  // Check for existing account based on registered email address
  const existingUser = await usersRepo.getOneBy({ email });

  if (existingUser) {
    return res.send("Email in use");
  }

  // Check if password & password configuration are the same
  if (password !== passwordConfirmation) {
    return res.send("Passwords must   match");
  }

  // Otherwise, create a user record in the UserRepository (users.json)
  const user = await usersRepo.create({ email, password });

  // Store the ID inside the user's cookie

  res.send("Account Created!!!");
});

// Listening port
app.listen(3000, () => {
  console.log("Listening...");
});
