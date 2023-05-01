const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const insertData = async (newCustomer) => {
  try {
    const customers = database.collection('customers');
    await customers.insertOne(newCustomer, (err, result) => {
      if (err) throw err;
      console.log('1 customer inserted.');
      database.close();
    });
  } finally {
    await client.close();
  }
};
