const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const usersRepo = require("./repositories/users");

const app = express();

// To have the middleware function available to every route handler
app.use(bodyParser.urlencoded({ extended: true }));

// Call cookieSession() and pass a configuration object
// Used as an encryption key to secure information stored inside the cookie
app.use(
  cookieSession({
    keys: ["3ie98eri80929weudd1231287f"],
  })
);

// Root route GET request
app.get("/signup", (req, res) => {
  res.send(`
    <div>
      Your ID is: ${req.session.userId}
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
app.post("/signup", async (req, res) => {
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
  req.session.userId = user.id;

  res.send("Account Created!!!");
});

app.get("/signout", (req, res) => {
  // Forget information stored inside the cookie
  req.session = null;
  res.send("You are logged out");
});

app.get("/signin", (req, res) => {
  res.send(`
    <div>
      <form method="POST">
        <input name="email" placeholder="email" />
        <input name="password" placeholder="password" />
        <button>Sign In</button>
      </form>
    </div>
  `);
});

app.post("/signin", async (req, res) => {});

// Listening port
app.listen(3000, () => {
  console.log("Listening...");
});
