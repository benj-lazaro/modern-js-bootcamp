// Maze Game Project

const { Engine, Render, Runner, World, Bodies } = Matter;

const engine = Engine.create();

const { world } = engine;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
  },
});

Render.run(render);

Runner.run(Runner.create(), engine);

// Draw walls along the borders of the World object (top, bottom, left & right)
const walls = [
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
];

// Add shapes to the World object
World.add(world, walls);

// Crash dummy rectangle
World.add(world, Bodies.rectangle(200, 200, 40, 40));
