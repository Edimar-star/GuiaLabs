const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const sortData = async () => {
  try {
    const customers = database.collection('customers');
    customers
      .find()
      .sort({ name: 1 })
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
      });
  } finally {
    await client.close();
  }
};
