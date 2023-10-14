// Manipulating Classes Demo

const todo = document.querySelector("#todos .todo");
console.log(todo);

// Apply new styles on the 1st <li> element individually; NOT ideal
// todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
// todo.style.opacity = "50%";

console.log(todo.classList);
todo.classList.add("done");
