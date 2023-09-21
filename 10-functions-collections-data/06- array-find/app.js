// Array Find Demo

// Example #1
let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
];

let searchFor = "Mrs";

// Uses .includes() to search for the substring "Mrs" within the array elements
const movieSearch1 = movies.find(movie => {
    return movie.includes(searchFor);
});
console.log(movieSearch1);

// Uses .indexOf() to search for the starting substring "Mrs" within the array elements
const movieSearch2 = movies.find(movie => movie.indexOf("Mrs") === 0);
console.log(movieSearch2);


// Example #2
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

// Find the first instance of a book with a rating >= 4.3 from an array of objects
const bookSearch = books.find(book => book.rating >= 4.3);
console.log(bookSearch.title);

// Find the first instance of a book authored by Neil Gaiman from an array of objects
const gaimanBook = books.find(book => book.authors.includes("Neil Gaiman"));
console.log(gaimanBook.title);
