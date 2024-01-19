// This variable is declared only once after being required
let counter = 0;

// The assigned object is then uploaded into the 'require cache'
module.exports = {
  incrementCounter() {
    counter += 1;
  },
  getCounter() {
    return counter;
  },
};
