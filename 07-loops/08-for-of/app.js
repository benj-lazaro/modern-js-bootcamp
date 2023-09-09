// For...Of Loop Demo

let subredits = ["soccer", "popheads", "cringe", "books"];

// For loop implementation
console.log("For loop...");
for (let index = 0; index < subredits.length; index++) {
    console.log(`Subredit: ${subredits[index]}`);
}

// For...Of loop implmentation
console.log("For...Of loop...");
for (let subredit_name of subredits) {
    console.log(`Subredit ${subredit_name}`);
}

// For...Of loop iterate through a string
console.log("For...Of iterate through a string...")
for(let char of "cockadoodledoo") {
    console.log(`Character: ${char.toUpperCase()}`);
}
