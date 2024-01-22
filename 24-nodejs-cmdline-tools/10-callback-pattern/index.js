// Access the file system module from the NodeJS Standard Library
const fs = require("fs");

// Read the current directory, pass a callback function (with 2 arguments)
fs.readdir(".", (err, filenames) => {
  // Check if an error occurred during the read and handle it
  if (err) {
    console.log(err);
  }

  // Otherwise, list the filename(s) from the current directory stored in an array
  console.log(filenames);
});
