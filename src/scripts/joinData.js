const { DB_DATABASE } = require('../config');
const client = require('./database');
const database = client.db(DB_DATABASE);

const joinData = async () => {
  try {
    const customers = database.collection('customers');
    customers
      .aggregate([
        {
          $lookup: {
            from: 'products',
            localField: 'product_id',
            foreignField: '_id',
            as: 'productdetails',
          },
        },
      ])
      .toArray(function (err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
      });
  } finally {
    await client.close();
  }
};
