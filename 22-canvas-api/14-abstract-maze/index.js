// Maze Game Project

const { Engine, Render, Runner, World, Bodies } = Matter;

const engine = Engine.create();

const { world } = engine;

// Define the number of cells in a grid (maze)
// The maze is currently a 3x3 grid
const cells = 5;

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
// An array of 3 cells (items); each containing an array of 3 cells (items) filled with boolean value of false
const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

// Track vertical walls
// An array of 3 cells (items); each containing an array of 2 cells (items) filled with boolean value of false
const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

// Track horizontal walls
// An array of 2 cells (items); each containing an array of 3 cells (items) filled with boolean value of false
const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

console.log("Grid");
console.log(grid);

console.log("Verticals");
console.log(verticals);

console.log("Horizontals");
console.log(horizontals);
