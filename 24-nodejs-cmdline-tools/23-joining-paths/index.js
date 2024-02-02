#!/usr/bin/env node

const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const path = require("path");

// Callback Solution using Promise Method #3 = use the Promise implementation of fs.lstat()
const { lstat } = fs.promises;

// Callback Solution using Promise Method #2 = use the 'util' module & util.promisify() function
// const lstat = util.promisify(fs.lstat);

// Check if a target directory is passed as argument, otherwise default to current working directory
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  // Create an array that calls lstat for each file/folder read by fs.readdir()
  const statPromises = filenames.map((filename) => {
    // Pass the joined path and file/folder names to lstat()
    return lstat(path.join(targetDir, filename));
  });

  // Await until lstat calls (in parallel) are complete & save returned 'stat' objects
  const allStats = await Promise.all(statPromises);

  // Process and print out each item in allStats
  for (let stats of allStats) {
    const index = allStats.indexOf(stats);

    if (stats.isFile()) {
      console.log(filenames[index]);
    } else {
      console.log(chalk.bold(filenames[index]));
    }
  }
});

// Callback Solution using Promise Method #1
// const lstat = (filename) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(filename, (err, stat) => {
//       if (err) {
//         reject(err);
//       }

//       // If no error(s) encountered, return 'stat' object
//       resolve(stat);
//     });
//   });
// };