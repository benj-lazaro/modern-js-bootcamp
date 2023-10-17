// The Impossible Button Demo

const btn = document.querySelector("button");

btn.addEventListener("mouseover", function () {
  console.log("MOUSED OVER ME!");

  // window.innerHeight & window.innerWidth = browser's current window size
  // window.screen.availWidth & window.screen.availHeight = PC monitor screen size
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  console.log(`Window size: ${window.innerWidth} x ${window.innerHeight}`);
  console.log(
    `Screen size: ${window.screen.availWidth} x ${window.screen.availHeight}`
  );

  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;

  console.log(`Height: ${height}`);
  console.log(`Width: ${width}`);
});

btn.addEventListener("click", function () {
  btn.innerText = "YOU GOT ME!";
  document.body.style.backgroundColor = "green";
});
