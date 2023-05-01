const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const limitData = async (n) => {
  try {
    const customers = database.collection('customers');
    const result = customers.find().limit(n);

    console.log('Customers: \n');
    result.toArray((err, data) => {
      if (err) throw err;
      console.log(data);
      database.close();
    });
  } finally {
    await client.close();
  }
};
