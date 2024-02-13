const fs = require("fs");

// Setup for the users repository
class UsersRepository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repository requires a filename");
    }

    this.filename = filename;

    try {
      // Check for the existence of the declared users repository
      fs.accessSync(this.filename);
    } catch (err) {
      // Otherwise, create one with an empty array as content
      fs.writeFileSync(this.filename, "[]");
    }
  }

  async getAll() {
    // Open this.filename
    const contents = await fs.promises.readFile(this.filename, {
      encoding: "utf8",
    });

    // Read its contents
    console.log(contents);

    // Parse the content
    // Return parsed data
  }
}

// Test code
const test = async () => {
  const repo = new UsersRepository("users.json");

  // getAll() method
  await repo.getAll();
};

test();
