// .every() & .some() Demo

// Example #1
const words = ["dog", "dig", "log", "bag", "wag"];
console.log(`words = [${words}]`);

// Checks if every element in the array has the length of 3 characters
let allThreeLetters = words.every((word) => word.length === 3);
console.log(`All elements are 3 leters: ${allThreeLetters}`);

// Checks if every element ends with the letter 'g'
let endsWithG = words.every((word) => {
  const lastIndex = word.length - 1;
  return word[lastIndex] === "g";
});
console.log(`All elements ends with "g": ${endsWithG}`);

// Checks if every elements starts with the letter 'd'
let startsWithD = words.every((word) => word[0] === "d");
console.log(`All elements starts with "d": ${startsWithD}`);

// Checks if some of the elements starts with 'd'
startsWithD = words.some((word) => word[0] === "d");
console.log(`Some elements starts with "d": ${startsWithD}`);

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
console.log(books);

// Check if every book has a rating of 3.5 or highter
const allGoodBooks = books.every((book) => book.rating > 3.5);
console.log(`All books has > 3.5 rating: ${allGoodBooks}`);

const twoAuthors = books.some((book) => book.authors.length === 2);
console.log(`Some books with 2 authors: ${twoAuthors}`);
