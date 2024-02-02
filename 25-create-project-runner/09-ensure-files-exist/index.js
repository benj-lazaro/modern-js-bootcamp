#!/usr/bin/env node

const debounce = require("lodash.debounce");
const chokidar = require("chokidar");
const program = require("caporal");
const fs = require("fs");

// Setup "caporal" package
program
  .version("0.0.1")
  .argument("[filename]", "Name of the file to execute")
  .action(async ({ filename }) => {
    // Check if a filename has been passed, otherwise default to use "index.js" instead
    const name = filename || "index.js";

    // Check for the existence of the passed filename; throw an error if missing
    try {
      await fs.promises.access(name);
    } catch (err) {
      throw new Error(`Could not find the file ${name}`);
    }

    const start = debounce(() => {
      console.log("Starting user's program");
    }, 100);

    chokidar
      .watch(".")
      .on("add", start)
      .on("change", start)
      .on("unlink", start);
  });

// Execute "caporal" package
program.parse(process.argv);
