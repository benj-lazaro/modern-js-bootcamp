// forEach() Demo

// Working with an array
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

function printTriple(number) {
    console.log(number * 3);
}

// forEach() with anonymous function as argument
console.log("forEach() accepting an anoynmous as arguement...")
numbers.forEach(function (number) {
    console.log(number);
}); 

// foreach() with declared function as argument
console.log("forEach() accepting a declared function as arguement...")
numbers.forEach(printTriple);

// forEach() using two parameters...
console.log("foreEach() using two parameters...")
numbers.forEach(function (number, index) {
    console.log(`${index}: ${number}`);
});


// Working with an array of objects
const books = [{
    title: "Good Omens",
    authors: ["Terry Prachet", "Neil Gaiman"],
    rating: 4.25
},
{
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    raiting: 4.42
},
{
    title: "American Gods",
    authors: ["Neil Gaiman"],
    raiting: 4.11
},
{
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36
}
];

// 3 ways to print out the title of each book object in an arrays
console.log("Working on an array of objects using forEach()...")
books.forEach(function (book) {
    console.log(book.title.toLocaleUpperCase());
})

console.log("Working on an array of objects using for..of loop...")
for(let book of books) {
    console.log(book.title.toLocaleUpperCase());
}

console.log("Working on an array of objects using for loop...");
for(let index = 0; index < books.length; index++) {
    console.log(books[index].title.toLocaleUpperCase());
}