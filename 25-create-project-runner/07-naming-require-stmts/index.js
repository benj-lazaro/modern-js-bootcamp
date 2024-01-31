#!/usr/bin/env node

const debounce = require("lodash.debounce");
const chokidar = require("chokidar");
const program = require("caporal");

// Store debounced function for chokidar's "add" event with 100ms delay in variable 'start'
const start = debounce(() => {
  console.log("Starting user's program");
}, 100);

// Watch the cwd for file creation, change or deletion events & call corresponding callback
chokidar
  .watch(".")
  .on("add", start)
  .on("change", () => {
    console.log("File Changed");
  })
  .on("unlink", () => {
    console.log("File Deleted");
  });
