const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const products = require("./routes/admin/products");

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

app.use(authRouter);
app.use(products);

// Listening port
app.listen(3000, () => {
  console.log("Listening...");
});
