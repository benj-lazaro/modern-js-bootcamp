// Maze Game Project

const { Engine, Render, Runner, World, Bodies } = Matter;

const engine = Engine.create();

const { world } = engine;

// Define width & height for the walls i.e. size of the <canvas> element to be rendered
const width = 600;
const height = 600;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: true, // Enable / disable shape's wireframes mode
    width, // This is equivalent to width: widdth
    height, // This is equivalent to height: height
  },
});

Render.run(render);

Runner.run(Runner.create(), engine);

// Draw walls along the borders of the World object (top, bottom, left & right)
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
];

// Add shapes to the World object
World.add(world, walls);

// Generate grid (maze)
// An array of 3 items; each containing an array of 3 items filled with boolean value of false
const grid = Array(3)
  .fill(null)
  .map(() => Array(3).fill(false));

// Track vertical walls
// An array of 3 items; each containing an array of 2 items filled with boolean value of false
const verticals = Array(3)
  .fill(null)
  .map(() => Array(2).fill(false));

// Track horizontal walls
// An array of 2 items; each containing an array of 3 items filled with boolean value of false
const horizontals = Array(2)
  .fill(null)
  .map(() => Array(3).fill(false));

console.log("Grid");
console.log(grid);

console.log("Verticals");
console.log(verticals);

console.log("Horizontals");
console.log(horizontals);
