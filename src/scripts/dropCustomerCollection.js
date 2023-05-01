const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const dropCollection = async () => {
  try {
    database.collection('customers').drop(function (err, delOK) {
      if (err) throw err;
      if (delOK) console.log('Customer collection deleted');
    });
  } finally {
    await client.close();
  }
};
