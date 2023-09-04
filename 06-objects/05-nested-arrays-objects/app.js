// Nested Arrays Objects Demo

// Example #1 = An object with nested array & another object
const studentData = {
  firstName: "David",
  lastName: "Jones",
  strengths: ["Music", "Art"],
  exams: {
    midterm: 92,
    final: 88,
  },
};

console.log("An object with nested array & object...");
console.log(studentData);

// Access object properties using .dot-notation & [ ]
console.log("Accessing object properties...");

console.log(`First Name: ${studentData.firstName}`);
console.log(`Last Name: ${studentData["lastName"]}`);
console.log(`Strengths = ${studentData.strengths[0]} and ${studentData.strengths[1]}`);
console.log(`Exam Grades: Midterm = ${studentData.exams["midterm"]} and Final = ${studentData.exams["final"]}`);

// Compute the average grade of midtern & final exams
console.log("Compute the average grade of exams...");

// NOTE: Intentionally mixed [ ] & .dot-notation when accessing the values of corresponding object properties
const averageGrade = (studentData.exams["midterm"] + studentData.exams.final) / 2;
console.log(`Average Grade: ${averageGrade}`);


// Example #2 = A simple online shopping cart (an array of objects representing ordered items)
// First item ordered is located at the top of the array & most recent at the bottom
const shoppingCart = [
    {
        product: "Jenga Classic",
        price: 6.88,
        quantity: 1
    },
    {
        product: "Echo Dot",
        price: 29.99,
        quantity: 3
    },
    {
        product: "Fire Stick",
        price: 39.99,
        quantity: 2
    }
];

console.log("Shopping Cart contents...")
console.log(shoppingCart);

console.log(`First product: ${shoppingCart[0]["product"]}`);
console.log(`Price tag: ${shoppingCart[0]["price"]}`);
console.log(`Quantity: ${shoppingCart[0]["quantity"]}`);


// Example #3 = An object with a nested arrays * objects (Tic-Tac-Toe game)
const game = {
    player1: {
        userName: "Blue",
        playingAs: "X"
    },
    player2: {
        userName: "Muffins",
        playingAs: "O"
    },
    board :
    [
        ["O", null, "X"],
        ["X", "O", "X"],
        [null, "O", "X"],
    ]
};

console.log("Tic-Tac-Toe...");
console.log(game);

console.log(`Player 1: ${game.player1.userName} playing as ${game.player1.playingAs}...`)
console.log(`Player 1: ${game.player2.userName} playing as ${game.player2.playingAs}...`)

console.log(`Board Display:`);
console.log(game.board[0]);
console.log(game.board[1]);
console.log(game.board[2]);