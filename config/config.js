// This file is for development usage
// Configure enviroment variables separatedly on production

/* Set the name of your database */
const dbname = 'dbname';

/* Export API keys here */
module.exports = {
  mongoURI: `mongodb://localhost/${dbname}`
};
