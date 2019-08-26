// set up pg-promise
// http://vitaly-t.github.io/pg-promise/
const pgp = require('pg-promise')({});

// need keys for username, password and secret in local postgresql ('development')
const keys = require('../config/keys');


// create a Database object
// http://vitaly-t.github.io/pg-promise/Database.html
// then pass on an object with options
// https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax
const setupDB = () => {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: keys.databaseName,
      port: 5432,
      host: 'localhost',
      user: keys.user,
      password: keys.password,
      secret: keys.secret
    });
  }

  if (process.env.NODE_ENV === 'production') {
    return pgp(keys.databaseUrl);
  }
};

// run setupDB and return promise
const db = setupDB();

module.exports = db;
