// Map Object Demo

// .map() on an array of numbers
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];
console.log(`numbers = [${numbers}]`);

const doubles = numbers.map(function (number) {
    return number * 2;
});

console.log("Create an array of doubled values based on the array numbers...");
console.log(`doubles = [${doubles}]`);


const numberDetail = numbers.map(function (number) {
    return {
        value: number,
        isEven: number % 2 === 0
    }
});

console.log("Create an array of objects based on the array numbers...")
console.log(numberDetail);

// .map() on an array of words
const words = ["asap", "byob", "rsvp", "diy"];
console.log(`words = [${words}]`);

const abbreviation = words.map(function (word) {
    // Split each word into individual letters then join them back together with a '.' in-between
    return word.toLocaleUpperCase().split("").join(".");
})

console.log("Create an array of uppercased words separated by '.' based on the array words...");
console.log(abbreviation);


// .map() on an object
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
console.log(books);

const bookTitles = books.map(function (book) {
    return book.title;
})

console.log("Create an array of book titles based on the array of object named books...");
console.log(bookTitles);