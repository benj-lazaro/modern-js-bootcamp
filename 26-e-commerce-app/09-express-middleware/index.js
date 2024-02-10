const express = require("express");
const app = express();

// Middleware function that preprocesses data from a POST request
const bodyParser = (req, res, next) => {
  if (req.method === "POST") {
    req.on("data", (data) => {
      const parsed = data.toString("utf8").split("&");
      const formData = {};

      for (let pair of parsed) {
        const [key, value] = pair.split("=");
        formData[key] = value;
      }

      // Assign parsed form data into the body of the request
      req.body = formData;

      // Hand over control back to the route handler's callback function
      next();
    });
  } else {
    // Not a POST request, hand over control back to the route handler's callback function
    next();
  }
};

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
app.post("/", bodyParser, (req, res) => {
  console.log(req.body);
  res.send("Account created!");
});

// Listening port
app.listen(3000, () => {
  console.log("Listening...");
});
