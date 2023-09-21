// .filter() Demo

// Example #1
const numbers = [34, 35, 67, 54, 109, 102, 32, 9];
console.log(`numbers = [${numbers}]`);

// Create a new array that contains odd numbered elements
const oddNumbers = numbers.filter((number) => number % 2 === 1);
console.log(`odd numbers = [${oddNumbers}]`);

// Create a new array that contains even numbered elements
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(`even numbers = [${evenNumbers}]`);

const bigNumbers = numbers.filter((number) => number >= 50);
console.log(`big numbers = [${bigNumbers}]`);

// Example #2
const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

// Create a new array of book objects with a rating > 4.3
const goodBooks = books.filter((book) => book.rating > 4.3);
console.log(goodBooks);

// Create a new array of book objects with the genre of fantasy
const fantasyBooks = books.filter((book) => book.genres.includes("fantasy"));
console.log(fantasyBooks);

// Create a new array of book objects that are short in content
const shortForm = books.filter(
  (book) =>
    book.genres.includes("essays") || book.genres.includes("short stories")
);
console.log(shortForm);

// Mimics a searchbox; create a new array of books objects based on the passed query value
const query = "The";

const results = books.filter((book) => {
  const title = book.title.toLowerCase();
  return title.includes(query.toLowerCase());
});
console.log(results);
