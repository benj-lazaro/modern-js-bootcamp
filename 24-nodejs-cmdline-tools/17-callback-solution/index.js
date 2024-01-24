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

  // Callback Solution
  // Create an array based on the number of items retrieved by fs.readdir() & fill each item with 'null'
  const allStats = Array(filenames.length).fill(null);

  for (let filename of filenames) {
    // Identify the index of the current read item from filenames
    const index = filenames.indexOf(filename);

    // Retrieve the fs.Stats of the item being read
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }

      // Save the item's fs.Stats object on the array; effectively replacing the initial 'null' value
      allStats[index] = stats;

      // Run inner function for every element in the array
      // If a 'null' item still exists then .every() will return a falsy value
      const ready = allStats.every((stats) => {
        return stats;
      });

      // If all 'null' items have been remove then proceed to the final step of processing
      if (ready) {
        allStats.forEach((stats, index) => {
          console.log(filenames[index], stats.isFile());
        });
      }
    });
  }
});
