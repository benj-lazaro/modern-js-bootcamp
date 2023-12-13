// Maze Game Project

const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } =
  Matter;

const engine = Engine.create();

const { world } = engine;

// Define width & height for the <canvas> element to be rendered
const width = 800;
const height = 600;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width, // equivalent to width: widdth
    height, // equivalent to height: height
  },
});

Render.run(render);

Runner.run(Runner.create(), engine);

// Create a mouse constaint that keeps shape(s) within the World object
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
);

// Draw walls along the borders of the World object (top, bottom, left & right)
const walls = [
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
];

// Add shapes to the World object
World.add(world, walls);

// Generate 20 random shapes
for (let i = 0; i < 50; i++) {
  if (Math.random() > 0.5) {
    // Create rectangle shape
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * height, 40, 40)
    );
  } else {
    // Create a circle shape colored in Red
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * height, 35, {
        render: {
          fillStyle: "green",
        },
      })
    );
  }
}
