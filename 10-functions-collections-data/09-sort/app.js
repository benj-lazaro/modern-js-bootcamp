// .sort() Method Demo

// Example #1
const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
console.log(`prices = [${prices}]`);

// Creates a copy of an array using .slice()
const pricesCopy = prices.slice();
console.log(`pricesCopy = [${pricesCopy}]`);

const ascendingSort = prices.sort((a, b) => a - b);
console.log(`ascendingSort = [${ascendingSort}]`);

const descendingSort = prices.sort((a, b) => b - a);
console.log(`descendingSort = [${descendingSort}]`);

// Example #2
const books1 = [
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
 
// Creates a copy of the array books1
const books2 = books1.slice();

// Sort books according their ratings in ascending order
ascendingBookRatings = books1.sort((a, b) => a.rating - b.rating);
console.log(ascendingBookRatings);

// Sort books according their ratings in descending order
descendingBookRatings = books2.sort((a, b) => b.rating - a.rating);
console.log(descendingBookRatings);
