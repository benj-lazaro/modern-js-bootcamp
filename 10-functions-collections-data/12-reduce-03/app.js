// .reduce() Method Demo

// Example #1
const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];
console.log(`votes = [${votes}]`);

// Use .reduce() tp produce an object containing the number of 'y' and 'n' values
// It passes an initial value in the form of an empty object

// const results = votes.reduce((tally, currentValue) => {
//   if (tally[currentValue]) {
//     tally[currentValue]++;
//   } else {
//     tally[currentValue] = 1;
//   }
//   return tally;
// }, {});

// Shorter version
const results = votes.reduce((tally, currentValue) => {
  tally[currentValue] = (tally[currentValue] || 0) + 1;
  return tally;
}, {});
console.log(results);

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
    title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"],
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

// Create an object containing an array of books according to their ratings using .reduce() method
const groupedByRatings = books.reduce((groupedBooks, book) => {
  const key = Math.floor(book.rating);
  if (!groupedBooks[key]) groupedBooks[key] = [];
  groupedBooks[key].push(book);
  return groupedBooks;
}, {});
console.log(groupedByRatings);
