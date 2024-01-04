// Maze Game Project

const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const engine = Engine.create();
// Disable gravity within the grid (maze) in the Y-direction
engine.world.gravity.y = 0;

const { world } = engine;

// Define the number of cells in a grid (maze)
const cells = 6;

// Define the width & height of the walls i.e. size of the <canvas> element to be rendered
const width = 600;
const height = 600;

// Define the unit length of each cell
const unitLength = width / cells;

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

// Render the walls along the borders of the World object (top, bottom, left & right)
const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }),
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
    [row - 1, column, "up"],
    [row, column + 1, "right"],
    [row + 1, column, "down"],
    [row, column - 1, "left"],
  ]);
  // console.log(neighbors);

  // For each neighbor...
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;

    // See if the coordinates of the neighboring cell (surrounding the starting cell) is out-of-bounds
    if (
      nextRow < 0 ||
      nextRow >= cells ||
      nextColumn < 0 ||
      nextColumn >= cells
    ) {
      // Do nothing and move on to the next neighboring cell coordinate pairs
      continue;
    }

    // If we have visited that neighbor, continue to next neighbor
    if (grid[nextRow][nextColumn]) {
      continue;
    }

    // Remove a wall from either horizontals or verticals array
    // Update the value of neighboring cell to travel into on verticals
    if (direction === "left") {
      verticals[row][column - 1] = true;
    } else if (direction === "right") {
      verticals[row][column] = true;
      // Update the value of neighboring cell to travel into on horizontals
    } else if (direction === "up") {
      horizontals[row - 1][column] = true;
    } else if (direction === "down") {
      horizontals[row][column] = true;
    }

    // Visit that next cell i.e. call stepThroughCell() again
    stepThroughCell(nextRow, nextColumn);
  }
};

stepThroughCell(startRow, startColumn);

// Render the walls
horizontals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    // If 'cell' has a value of true then do not render a wall
    if (open) {
      return;
    }

    // Render a horitzontal wall
    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength / 2,
      rowIndex * unitLength + unitLength,
      unitLength,
      5,
      {
        label: "wall",
        isStatic: true,
      }
    );

    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) {
      return;
    }

    // Render a vertical wall
    const wall = Bodies.rectangle(
      columnIndex * unitLength + unitLength,
      rowIndex * unitLength + unitLength / 2,
      5,
      unitLength,
      {
        label: "wall",
        isStatic: true,
      }
    );

    World.add(world, wall);
  });
});

// Render the goal
const goal = Bodies.rectangle(
  width - unitLength / 2,
  height - unitLength / 2,
  unitLength * 0.7,
  unitLength * 0.7,
  {
    isStatic: true,
    label: "goal",
  }
);

World.add(world, goal);

// Render the ball
const ball = Bodies.circle(unitLength / 2, unitLength / 2, unitLength / 4, {
  label: "ball",
});
World.add(world, ball);

// Capture 'keydown' events for ball movement
document.addEventListener("keydown", (event) => {
  // Get current velocity of the ball
  const { x, y } = ball.velocity;

  // Move ball up
  if (event.keyCode === 87) {
    Body.setVelocity(ball, { x, y: y - 5 });
  }

  // Move ball right
  if (event.keyCode === 68) {
    Body.setVelocity(ball, { x: x + 5, y });
  }

  // Move ball down
  if (event.keyCode === 83) {
    Body.setVelocity(ball, { x, y: y + 5 });
  }

  // Move ball left
  if (event.keyCode === 65) {
    Body.setVelocity(ball, { x: x - 5, y });
  }
});

// Win condition
// Listen to an event called 'collisionStart'
Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];

    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      // Enable gravity
      world.gravity.y = 1;
      // Disable static on all horizontal & vertical walls
      world.bodies.forEach((body) => {
        if (body.label === "wall") {
          Body.setStatic(body, false);
        }
      });
    }
  });
});
