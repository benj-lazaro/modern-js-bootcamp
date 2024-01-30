#!/usr/bin/env node

const chokidar = require("chokidar");

// Watch the cwd for file creation, change or deletion events
// Then call the corresponding callback function
chokidar
  .watch(".")
  .on("add", () => {
    console.log("Starting user's program");
  })
  .on("change", () => {
    console.log("File Changed");
  })
  .on("unlink", () => {
    console.log("File Deleted");
  });
