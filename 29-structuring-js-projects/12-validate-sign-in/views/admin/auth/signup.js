const layout = require("../layout");

const getError = (errors, prop) => {
  // prop = contains the corresponding validator object (email || password || passwordConfirmation)
  try {
    // Return the value assigned to the validator object's property msg if there is one
    return errors.mapped()[prop].msg;
  } catch (err) {
    // Otherwise, return an empty string
    return "";
  }
};

module.exports = ({ req, errors }) => {
  return layout({
    content: `
  <div>
    Your ID is: ${req.session.userId}
    <form method="POST">
      <input name="email" placeholder="email" />
      ${getError(errors, "email")}
      <input name="password" placeholder="password" />
      ${getError(errors, "password")}
      <input name="passwordConfirmation" placeholder="password confirmation" />
      ${getError(errors, "passwordConfirmation")}
      <button>Sign Up</button>
    </form>
  </div>
  `,
  });
};
