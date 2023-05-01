const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const findData = async (productId) => {
  try {
    const products = database.collection('products');
    await products.findOne({ _id: productId }, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  } finally {
    await client.close();
  }
};
