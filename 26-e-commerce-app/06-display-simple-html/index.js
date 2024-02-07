const express = require("express");

// app object = describes all the different things the web server can do
const app = express();

// Define a route handler; req = request, res = response
// root route
app.get("/", (req, res) => {
  res.send(`
    <div>
      <form>
        <input placeholder="email" />
        <input placeholder="password" />
        <input placeholder="password confirmation" />
        <button>Sign Up</button>
      </form>
    </div>
  `);
});

// Define port 3000 to listen requests from
app.listen(3000, () => {
  console.log("Listening...");
});
