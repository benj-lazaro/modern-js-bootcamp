// Hook-up the check function of the express-validator library
const { check } = require("express-validator");

// Hook-up the users' repository codebase
const usersRepo = require("../../repositories/users");

// Export validation chain
module.exports = {
  requireEmail: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must be a valid email")
    .custom(async (email) => {
      const existingUser = await usersRepo.getOneBy({ email });
      if (existingUser) {
        throw new Error("Email in use");
      }
    }),
  requirePassword: check("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 4 and 20 characters"),
  requirePasswordConfirmration: check("passwordConfirmation")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Must be between 4 and 20 characters")
    .custom((passwordConfirmation, { req }) => {
      if (passwordConfirmation !== req.body.password) {
        throw new Error("Passwords must match");
      }
    }),
  requireEmailExists: check("email")
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage("Must provide valid email")
    .custom(async (email) => {
      const user = await usersRepo.getOneBy({ email });

      if (!user) {
        throw new Error("Email not found");
      }
    }),
  requireValidPasswordForUser: check("password")
    .trim()
    .custom(async (password, { req }) => {
      // Access to the user's record
      const user = await usersRepo.getOneBy({ email: req.body.email });

      // Check if the record exists
      if (!user) {
        throw new Error("Invalid password");
      }

      // Check if password matches with the password in the record
      const validPassword = await usersRepo.comparePasswords(
        user.password,
        password
      );

      if (!validPassword) {
        throw new Error("Invalid password");
      }
    }),
};
