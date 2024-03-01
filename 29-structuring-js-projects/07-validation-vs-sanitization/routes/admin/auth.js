const express = require("express");

// Hook-up the check function of the express-validator library
const { check } = require("express-validator");

const usersRepo = require("../../repositories/users");

// Hook-up HTML templates
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");

const router = express.Router();

// Root route GET request handler
router.get(
  "/signup",
  [check("email").isEmail(), check("password"), check("passwordConfirmation")],
  (req, res) => {
    res.send(signupTemplate({ req }));
  }
);

// Root route POST request handler
router.post("/signup", async (req, res) => {
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

// Sign-out route GET request handler
router.get("/signout", (req, res) => {
  // Forget information stored inside the cookie
  req.session = null;
  res.send("You are logged out");
});

// Export the (sub)-router
module.exports = router;

// Sign-in route GET request handler
router.get("/signin", (req, res) => {
  res.send(signinTemplate());
});

// Sign-in route POST request handler
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  // Retrieve record based on provided credentails
  const user = await usersRepo.getOneBy({ email });

  // Check if email address exists in the records
  if (!user) {
    return res.send("Email not found.");
  }

  // Check if password matches with the password in the record
  const validPassword = await usersRepo.comparePasswords(
    user.password,
    password
  );

  if (!validPassword) {
    return res.send("Invalid password");
  }

  // Otherwise, login the user
  req.session.userId = user.id;
  res.send(`
      <div>You are signed in!</div>
      <div>Your ID is: ${req.session.userId}</div>
    `);
});
