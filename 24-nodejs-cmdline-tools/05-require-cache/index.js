// Instruct Node.js to read & execute the code of 'myscript.js'
require("./myscript.js");

// Returns an object containing the contents of the 'require cache'
// The 2nd object has an 'id' property with a value pointing to the file 'mysript.js'
// On the property 'exports' holds the exported value in 'myscript.js'
console.log(require.cache);
