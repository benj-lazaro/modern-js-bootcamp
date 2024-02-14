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

  // Open users repo, read its content and parse as JSON
  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf8",
      })
    );
  }

  // Create a record based on the passed attributes (attrs)
  async create(attrs) {
    // Read the current content (an array) of users.json
    const records = await this.getAll();

    // Create a new record by pushing the parsed data into the array
    records.push(attrs);

    await this.writeAll(records);
  }

  // Write the collected and parsed records to a JSON file
  async writeAll(records) {
    // The 2nd argument for the .stringify() is a custom formatter; passing a value of "null" meant NO FORMATTING
    // The 2 refers to the number indentation (i.e. 2 spaces) on the JSON string (not the file) to make it easier to read
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }
}

// Test code
const test = async () => {
  const repo = new UsersRepository("users.json");

  await repo.create({ email: "qwerty@gmail.com", password: "password" });

  const users = await repo.getAll();
  console.log(users);
};

test();
