// Reference Type Demo

// Working with primitive data types -> value type variables
console.log("Working with Primitive Data Types...");

let fruit = "orange";               // Assign a primitive data type of string
let color = fruit;                  // Copies assigned value of variable fruit
console.log(`fruit = ${fruit}`);
console.log(`color = ${color}`);

fruit = "watermelon";               // Variable fruit updates assigned value
console.log(`fruit = ${fruit}`);    // Stored actual value is updated
console.log(`color = ${color}`);    // Copied actual value remain unchanged


// Working with reference data types
console.log("Working with Reference Data Types...");

let nums = [5, 6, 7, 8];                    // Reference to the array stored in variable nums
let otherNums = nums;                       // Copies the assigned reference (address) of variable nums
console.log(`nums = [${nums}]`);
console.log(`otherNums = [${otherNums}]`);

nums.push(9, 10);                           // Push new elements to the end of the array
console.log(`nums = [${nums}]`);            // Array value updated
console.log(`otherNums = [${otherNums}]`);  // Array value also updated as it points to the same array in memory