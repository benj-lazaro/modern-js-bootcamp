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

    // Return the generated user ID
    return attrs;
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

  async delete(id) {
    // Retrieve existing records from the .json file
    const records = await this.getAll();
    // Get all records that is NOT equal to the matching ID
    const filteredRecords = records.filter((record) => record.id !== id);
    // Write filtered records back into the file excluding the targeted record
    await this.writeAll(filteredRecords);
  }

  async update(id, attrs) {
    const records = await this.getAll();
    const record = records.find((record) => record.id === id);

    if (!record) {
      throw new Error(`Record with id ${id} not found`);
    }

    // Copy the key-pair values from the attrs object into the record object
    Object.assign(record, attrs);

    // Write changes into the .json file
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();

    // Iterate through the records
    for (let record of records) {
      let found = true;

      // Iterate through the keys within the filters object
      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      // Return the found record
      if (found) {
        return record;
      }
    }
  }
}

// Export this class & pass as argument the name of the file where the data will be stored
// There is a need to have one copy of this class to be used in the application
module.exports = new UsersRepository("users.json");
