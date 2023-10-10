// value, src, href & more Demo

// To retrieve the values of the attribute 'value' in a <form> element
const inputs = document.querySelectorAll("input");
console.log(inputs);

// To retrieve the attribute 'value' of the 1st <input> element
console.log(`1st <input> value: ${inputs[0].value}`);

// To retrieve the status of the 'checked' property of the <input> element of 'type' checkbox
console.log(`3rd <input> checked: ${inputs[2].checked}`);

// To replace the attribute 'value' of an element
inputs[0].value = "USS Enterprise";

// To update the attribute 'value' of an element
inputs[0].value += "-D";

// To retrieve the attribute 'placeholder' of the <input> element of 'type' password
console.log(inputs[1].placeholder);

// To set the attribute 'placeholder'  of the <input> element of 'type' password
inputs[1].placeholder = "Your Password";

// To retrieve the attribute 'href' from an <a> element
const a = document.querySelector("a");
console.log(a.href);

// To set the attribute 'href' of an <a> element
a.href = "https://duckduckgo.com/";

// To retrieve the attribute 'src' from an <img> element
const img = document.querySelector("img");
console.log(img.src);

// To set the attribute 'src' of an <img> element
img.src =
  "https://www.giantfreakinrobot.com/wp-content/uploads/2020/12/Screen-Shot-2020-12-08-at-1.41.35-PM.png";
