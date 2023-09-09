// For..Of with Objects Demo

console.log("Iterating through an object using for..of loop...");

const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    "In Bruges": 9,
    Amadeus: 10,
    "Kill Bill": 8,
    "Litte Miss Sunshine": 8.5,
    Coraline: 7.5
}

// Use Object.keys() method to access the object's keys (i.e. movie titles)
for(let movie of Object.keys(movieReviews)) {
    console.log(`${movie}'s rating is ${movieReviews[movie]}`);
}

// Use Object.values() method to access the corresponding values of the keys (i.e. score rating)
const ratings = Object.values(movieReviews);

let totalScore = 0

for(let score of ratings) {
    totalScore += score;
}

let avgRating = totalScore / ratings.length;
console.log(`Films Average Rating: ${Math.floor(avgRating)}`);
