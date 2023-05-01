const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const limitData = async (n) => {
  try {
    const products = database.collection('products');
    const result = products.find().limit(n);

    console.log('\nProducts: \n');
    result.toArray((err, data) => {
      if (err) throw err;
      console.log(data);
      database.close();
    });
  } finally {
    await client.close();
  }
};
