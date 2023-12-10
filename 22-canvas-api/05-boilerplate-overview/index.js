// Deconstruct objects from the global variable Matter of the matter.js library
const { Engine, Render, Runner, World, Bodies } = Matter;

// Instantiate a new Engine object
const engine = Engine.create();

// Deconstruct a world object from the created engine object
const { world } = engine;

// Render a World object with a width of 800px and height of 600px
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
  },
});

// Draw / render the World object on screen (browser)
Render.run(render);

// Coordinate state changes of the Engine & World objects
Runner.run(Runner.create(), engine);

// Define a non-movable rectangle w/ the size of 50px by 50px, to be positioned at coordinates 200 x 200
const shape = Bodies.rectangle(200, 200, 50, 50, {
  isStatic: true,
});

// Add the defined static rectangle into the World object
World.add(world, shape);

// Display contents of the World object in the console
// Expland object property 'bodies' then '0' (referring to the 1st shape)
console.log(world);
