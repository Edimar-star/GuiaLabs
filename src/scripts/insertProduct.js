const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const insertData = async (newProduct) => {
  try {
    const products = database.collection('products');
    await products.insertOne(newProduct, (err, result) => {
      if (err) throw err;
      console.log('1 product inserted.');
      database.close();
    });
  } finally {
    await client.close();
  }
};
