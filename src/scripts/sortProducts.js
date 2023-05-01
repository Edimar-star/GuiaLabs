const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const sortData = async () => {
  try {
    const products = database.collection('products');
    products
      .find()
      .sort({ name: 1 })
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
      });
  } finally {
    await client.close();
  }
};
