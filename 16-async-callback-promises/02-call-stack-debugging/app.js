// Call Stack Debugging Using Dev Tools Demo

// Repeats a string x times
const repeat = (string, times) => {
  let result = "";
  for (let index = 0; index < times; index++) {
    result += string;
  }
  return result;
};

// Uppercase string & append "!!!"
const scream = (string) => {
  return string.toUpperCase() + "!!!";
};

// Passes a string to repeat() & scream() functions
const genRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

// Creates a new <h1> element, passes a string to genRantText() function
const makeRant = (phrase, element) => {
  const h1 = document.createElement("h1");
  h1.innerText = genRantText(phrase);
  element.appendChild(h1);
};

makeRant("I hate mayonaise", document.body);
// makeRant("if you have to cough,please cover your mouth", document.body);
