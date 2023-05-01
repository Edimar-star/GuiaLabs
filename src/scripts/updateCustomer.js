const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const updateData = async (query, newDataCustomer) => {
  try {
    const customers = database.collection('customers');
    await customers.updateOne(query, { $set: newDataCustomer }, (err, res) => {
      if (err) throw err;
      console.log('1 customer updated');
    });
  } finally {
    await client.close();
  }
};
