// Access the 'file system' module to access the readdir() function
const fs = require("fs");

// Access the 'process' module to access the cwd() function
const { cwd } = require("node:process");

// Read the current directory, pass a callback function with 2 arguments (err, filenames)
fs.readdir(`${cwd()}`, (err, filenames) => {
  // Check if an error occurred when reading the current working directory (cwd) & handle it
  if (err) {
    console.log(err);
  }

  // Otherwise, access the folder/file name(s) from the cwd & store it an array
  console.log(filenames);
});
