const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

// Import the router of auth.js
const authRouter = require("./routes/admin/auth");

const app = express();

app.use(express.static("public"));

// To have the middleware function available to every route handler
app.use(bodyParser.urlencoded({ extended: true }));

// Call cookieSession() and pass a configuration object
// Used as an encryption key to secure information stored inside the cookie
app.use(
  cookieSession({
    keys: ["3ie98eri80929weudd1231287f"],
  })
);

// Hook-up the router of auth.js
app.use(authRouter);

// Listening port
app.listen(3000, () => {
  console.log("Listening...");
});
