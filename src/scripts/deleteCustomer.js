const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const deleteCustomer = async (customerId) => {
  try {
    const customers = database.collection('customers');
    await customers.deleteOne({ _id: customerId }, (err, obj) => {
      if (err) throw err;
      console.log('Successfully deleted one customer.');
    });
  } finally {
    await client.close();
  }
};
