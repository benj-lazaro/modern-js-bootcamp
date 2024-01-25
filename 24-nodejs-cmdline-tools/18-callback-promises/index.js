#!/usr/bin/env node
const fs = require("fs");
const util = require("util");

// Callback Solution using Promise Method #3 = use the Promise implementation of fs.lstat()
const { lstat } = fs.Promises;

// Callback Solution using Promise Method #2 = use the 'util' module & util.promisify() function
// const lstat = util.promisify(fs.lstat);

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err);
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
