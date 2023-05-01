const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const findData = async (customerId) => {
  try {
    const customers = database.collection('customers');
    await customers.findOne({ _id: customerId }, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  } finally {
    await client.close();
  }
};
