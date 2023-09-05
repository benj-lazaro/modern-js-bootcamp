// Array Object Equality Demo

let nums = [1, 2, 3];
let mystery = [1, 2, 3];

console.log(`nums = [${nums}]`);
console.log(`mystery = [${mystery}]`);

// Comparing two arrays of identical elements & order will result to false
// What is being compared is NOT their content but their LOCATIONS in memory where the actual arrays are
console.log(`nums === mystery results to ${nums === mystery}`);

// In order for array comparisons to be evaluated to true
// Both variables must point to the same memory location of the array
let moreNums = nums;
console.log(`nums = [${nums}]`);
console.log(`moreNums = [${moreNums}]`);
console.log(`nums === moreNums results to ${nums === moreNums}`);

// The same ruling applies to objects
let data1 = {a: 1};
let data2 = {a: 1};
let data3 = data1;
console.log(`data1 === data2 results to ${data1 === data2}`);   // Evaluates to false
console.log(`data1 === data3 results to ${data1 === data3}`);   // Evaluates to true

const user = {
    userName: "CherryGarcia8",
    email: "garcia@gmail.com",
    notifications: []
};

console.log(user);

console.log("To check if the notification property of the object user is empty...");
if (!user.notifications.length) {               // .length property returns 0 if empty
    console.log("No new notifications...");
}

