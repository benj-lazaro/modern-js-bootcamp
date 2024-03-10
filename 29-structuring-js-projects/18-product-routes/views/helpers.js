module.exports = {
  getError(errors, prop) {
    // prop = contains the corresponding validator object (email || password || passwordConfirmation)
    try {
      // Return the value assigned to the validator object's property msg if there is one
      return errors.mapped()[prop].msg;
    } catch (err) {
      // Otherwise, return an empty string
      return "";
    }
  },
};
