#!/usr/bin/env node

// Require the 'file system' module to access the readdir() function
const fs = require("fs");

// Read the current directory, pass a callback function with 2 arguments (err, filenames)
fs.readdir(process.cwd(), (err, filenames) => {
  // Check if an error occurred when reading the current working directory (cwd) & handle it
  if (err) {
    console.log(err);
  }

  // Otherwise, iterate through the read items & identify if it is a file or folder

  // INTENTIONAL BAD CODE STARTS HERE!!!
  // Reason: On Mac OS, running 'nls' successively with short periods of time in-between
  // yields a list of items in varying order; this is due to the nature of callbacks in Node.js
  for (let filename of filenames) {
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }

      console.log(filename, stats.isFile());
    });
  }
  // INTENTIONAL BAD CODE ENDS HERE!!!
});
