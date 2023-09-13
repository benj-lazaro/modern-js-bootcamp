// Block Scope Demo

// Problem demo using the keyword var
var index = "before for loop";     // Variable index is assigned with a string value
console.log(index);

const animals = ["grizzly bear", "panda bear", "spectacled bear"];

// Variable index is declared & used within the for loop
for (var index = 0; index < animals.length; index++) {
    console.log(index, animals[index]);
}

// Variable index from the for loop still persists & overrides the earlier string value 'test'
console.log(index);



// Block scoping using const & let
let index2 = "before for loop";     // Variable index is assigned with a string value
console.log(index2);

const animals2 = ["grizzly bear", "panda bear", "spectacled bear"];

// Variable index is declared & used within the for loop
for (let index2 = 0; index2 < animals.length; index2++) {
    console.log(index2, animals[index2]);
}

// Variable index contains the same string value that was assign before the for loop
console.log(index2);


// Returns an array with its elements doubled
function doubleArray(array) {
    const result = [];                  // Function scoped variable result

    for (let element of array) {
        let double = element * 2;       // Block scoped variable double; can NOT be access outside the block
        result.push(double);
    }

    return result;
}

let result = doubleArray([1, 2, 3]);    // Globally scoped variable result
console.log(result);


