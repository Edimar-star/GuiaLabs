const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const updateData = async (query, newDataProduct) => {
  try {
    const products = database.collection('products');
    await products.updateOne(query, { $set: newDataProduct }, (err, res) => {
      if (err) throw err;
      console.log('1 customer updated');
    });
  } finally {
    await client.close();
  }
};
