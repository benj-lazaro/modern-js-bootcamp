// Function Scope Demo

function lol() {
    // Variables declared are scoped within this function
    let person = "Tom";
    const age = 45;
    var color = "teal";
    console.log(age);
}

function changeColor() {
    // Variables declared are scoped within this function
    let color = "purple";
    const age = 19;
    console.log(age);
}

lol();
changeColor();

// Variable bird declared outside a function (global)
let bird = "mandarin duck";

function birdWatch() {
    // Variable bird declared within the function
    let bird = "golden pheasant";
    console.log(bird);
}

birdWatch();
console.log(bird);
