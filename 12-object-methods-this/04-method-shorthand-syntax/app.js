// Method Shorthand Syntax Demo
const auth = {
    username: "Tommy Bot",
    login() {
        console.log("Logged you in!")
    },
    logout() {
        console.log("Goodbye!")
    }
}

console.log(`Username: ${auth.username}`);
console.log(auth.login());
console.log(auth.logout());
