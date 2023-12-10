// Deconstruct objects from the global variable Matter of matter.js library
const { Engine, Render, Runner, World, Bodies } = Matter;

// Instantiate a new Engine object
const engine = Engine.create();

// Deconstruct a world object from the created engine object
const { world } = engine;

// Instantiate a new Render object using .create() method & passing an object as argument value
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
  },
});

// Instruct Render to run the render object to draw updates of the world object on screen (browser)
Render.run(render);

// Coordinate changes from state A to state B of the engine object
Runner.run(Runner.create(), engine);

// Create a new static rectangle shape
const shape = Bodies.rectangle(200, 200, 50, 50, {
  isStatic: true,
});

// Add the created shape into the world object
World.add(world, shape);
