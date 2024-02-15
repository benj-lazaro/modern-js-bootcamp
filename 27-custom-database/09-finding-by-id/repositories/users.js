const fs = require("fs");
const crypto = require("crypto");

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
    // Assign a random ID for this record
    attrs.id = this.randomId();

    // Read the current content (an array) of users.json
    const records = await this.getAll();

    // Create a new record by pushing the parsed data into the array
    records.push(attrs);

    // Write created record to file
    await this.writeAll(records);
  }

  // Write the collected and parsed records to a JSON file
  async writeAll(records) {
    // The 2nd argument .stringify() = custom formatter
    // The argument value of null meant NO FORMATTING
    // The argument value of 2 meant 2 space for indentation
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  // Generate a random string of raw data of 4 bytes long and return it as a hexadecimal string
  randomId(records) {
    return crypto.randomBytes(4).toString("hex");
  }

  // Fetch a record by their given ID
  async getOne(id) {
    // Retrieve existing records from users.json file
    const records = await this.getAll();

    // Return the records with the matching ID
    return records.find((record) => record.id === id);
  }
}

// Test code
const test = async () => {
  const repo = new UsersRepository("users.json");

  // Test on record with a valid ID
  const user = await repo.getOne("de6b5e08");
  console.log(user);

  // Test on record with an invalid ID
  const user1 = await repo.getOne("12343432");
  console.log(user1);
};

test();
