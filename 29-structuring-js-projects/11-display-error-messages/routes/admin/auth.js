const express = require("express");

// Hook-up the check function of the express-validator library
const { check, validationResult } = require("express-validator");

const usersRepo = require("../../repositories/users");

// Hook-up HTML templates
const signupTemplate = require("../../views/admin/auth/signup");
const signinTemplate = require("../../views/admin/auth/signin");

// Destructure properties from the exported object of validators.js
const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmration,
} = require("./validators");

const router = express.Router();

// Root route GET request handler
router.get("/signup", (req, res) => {
  res.send(signupTemplate({ req }));
});

// Root route POST request handler
router.post(
  "/signup",
  [requireEmail, requirePassword, requirePasswordConfirmration],
  async (req, res) => {
    const errors = validationResult(req);

    // If there is an error, return form along with error message
    if (!errors.isEmpty()) {
      return res.send(signupTemplate({ req, errors }));
    }

    // Deconstruct request body into their corresponding variables
    const { email, password, passwordConfirmation } = req.body;

    // Create a user record in the UserRepository (users.json)
    const user = await usersRepo.create({ email, password });

    // Store the ID inside the user's cookie
    req.session.userId = user.id;

    // Send back response message
    res.send("Account created!!!");
  }
);

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
