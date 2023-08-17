// Performance Review
// 3 = superstar
// 2 = meets expectations
// 1 = needs improvement
// anything else = you're fired

let rating = 213;

if (rating === 3) {
    console.log("You are a superstar!");
} else if (rating === 2) {
    console.log("Meets expectations");
} else if (rating === 1) {
    console.log("Needs improvement");
} else {
    console.log("Invalid rating");
}


// Example 2
let highScore = 1430;
let userScore = 1600;

if (userScore >= highScore) {
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScore = userScore;
} else {
    console.log(`Good game. Your score of ${userScore} did not beat the high score of ${highScore}.`);
}