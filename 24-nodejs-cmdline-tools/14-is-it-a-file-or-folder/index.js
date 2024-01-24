#!/usr/bin/env node

// Require the 'file system' module to access the readdir() function
const fs = require("fs");

// Read the current directory, pass a callback function with 2 arguments (err, filenames)
fs.readdir(process.cwd(), (err, filenames) => {
  // Check if an error occurred when reading the current working directory (cwd) & handle it
  if (err) {
    console.log(err);
  }

  // Otherwise, store folder/file name(s) read in an array & display it
  console.log(filenames);
});
