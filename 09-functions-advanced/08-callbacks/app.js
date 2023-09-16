// Callbacks Demo

// function grumpus() {
//     alert("Gah! Go away!");
// }

// Calls back the grumps() after 5000 milliseconds (5 seconds)
// setTimeout(grumpus, 5000);

// Calls back an anonymous function
// setTimeout(function (){
//     alert("Welcome");
// }, 3000);

const btn = document.querySelector("button");

// grumps is the callback function passed as an argument to the .addEventListener() of the selected DOM element btn
// btn.addEventListener("click", grumpus);

// anonymous function is the callback function
btn.addEventListener("click", function() {
    alert("Why do you clicked me!");
});