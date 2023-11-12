// json-utils.js
const fs = require('fs');

const setJsonKey = (file, key, value) => {
  const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
  data[key] = value;
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
};

const otherFunction1 = () => {
  // Other functions...
};

const otherFunction2 = () => {
  // Other functions...
};

// Exporting functions
module.exports = {
  setJsonKey,
  otherFunction1,
  otherFunction2,
};
