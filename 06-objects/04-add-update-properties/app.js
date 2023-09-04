// Adding & Updating Object Properties Demo

// Define an empty object
const userReviews = {};

// Add a new property with value into the object userReviews using [ ]
userReviews["queenBee49"] = 4.0;
console.log(userReviews);

// Add another property with value into the object userReviews using .dot-notation
userReviews.mrSmith78 = 3.5;
userReviews.colt = 5;
console.log(userReviews);

// To update an existing object property using [ ] and .dot-notation
userReviews.queenBee49 = 8.0;
userReviews.colt = 10;
userReviews["mrSmith78"] = 5;
console.log(userReviews);

// To change the existing assigned value to the corresponding object property using a mathematical operators
userReviews.queenBee49 += 10;
userReviews["colt"] += 2;
userReviews.mrSmith78 *= 2;
userReviews.mrSmith78++;
console.log(userReviews);
