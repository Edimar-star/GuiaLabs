const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const deleteProduct = async (productId) => {
  try {
    const products = database.collection('products');
    await products.deleteOne({ _id: productId }, (err, obj) => {
      if (err) throw err;
      console.log('Succesfully deleted one product');
    });
  } finally {
    await client.close();
  }
};
