// Example 1
let loggedInUser = "testdummy369";

if (!loggedInUser) {
    console.log("Get out of here!");
} else {
    console.log(`Welcome back ${loggedInUser}!`);
}

// Example 2
let flavor = "watermelon";

if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log("We only have grape and cherry flavors.")
}