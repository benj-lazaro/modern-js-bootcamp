const layout = require("../layout");
const { getError } = require("../../helpers");

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
