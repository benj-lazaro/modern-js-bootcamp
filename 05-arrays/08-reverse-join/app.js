// .join() & .reverse() methods demo

 let letters = ["t", "c", "e", "p", "s", "e", "r"];

 console.log(`letters = [${letters}]`);

//  Reversing array elements with .reverse()
console.log("Reverseing array elements with .reverse()");
letters.reverse();
console.log(`letters = [${letters}]`);

// Join array elements into a string
console.log("Joining array elements into a string using .join()");
newString1 = letters.join()
console.log(`Returned string: ${newString1}`);

let mixedArray = [12.3, true, "hello", false];

// Join array elements of mixed type into a string
console.log("Joining array of mixed elements into a string using .join()");
newString2 = mixedArray.join()
console.log(`Returned string: ${newString2}`);

console.log("Joining array of mixed elements into a string using .join() & a different separator");
newString2 = mixedArray.join(" #-> ");
console.log(`Returned string: ${newString2}`);