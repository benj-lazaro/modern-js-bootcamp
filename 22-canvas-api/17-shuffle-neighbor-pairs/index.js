// Maze Game Project

const { Engine, Render, Runner, World, Bodies } = Matter;

const engine = Engine.create();

const { world } = engine;

// Define the number of cells in a grid (maze)
// The maze is currently a 3x3 grid
const cells = 3;

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

// Maze generation

// Re-order the elements of an array
const shuffle = (arr) => {
  let counter = arr.length;

  while (counter > 0) {
    // Generate a random index inside the array
    const index = Math.floor(Math.random() * counter);
    counter--;

    // Swap the elements of arr[index] and arr[counter]
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

// Generate a grid consisting of cells filled with boolean value of false
const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

// Track vertical walls
const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

// Track horizontal walls
const horizontals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

// Generate the starting cell
const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

// Implement the algorithm on handling 'wall's that have been visited by a user
const stepThroughCell = (row, column) => {
  // If we have visited the cell at [row, column] (i.e. boolean value of true) then return
  if (grid[row][column]) {
    return;
  }

  // Mark the cell as being visited
  grid[row][column] = true;

  // Assemble randomly-ordered list of neighbors
  // An array of 2-value coordinates of neighboring cells around the starting cell
  const neighbors = shuffle([
    [row - 1, column],
    [row, column + 1],
    [row + 1, column],
    [row, column - 1],
  ]);

  // See if the neighbor cell's coordinates surrounding the starting cell is out-of-bounds
  //
  // If we have visited that neighbor, continue to next neighbor
  //
  // Remove a wall from either horizontals or verticals array
  //
  // Visit that next cell i.e. call stepThroughCell() again
};

stepThroughCell(startRow, startColumn);

// For debugging purposes only
console.log(neighbors);

console.log(`Starting Cell: ${startRow}, ${startColumn}`);
console.log(grid);
