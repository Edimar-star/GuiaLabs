const { MongoClient } = require('mongodb');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_DATABASE } = require('../config');

const MONGODB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/?retryWrites=true&w=majority`;
const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const run = async () => {
  try {
    await client.connect();
    const dbo = client.db(DB_DATABASE);

    dbo.createCollection('customers', function (err, res) {
      if (err) throw err;
      console.log('Customer collection created!');
      db.close();
    });

    dbo.createCollection('products', function (err, res) {
      if (err) throw err;
      console.log('Product collection created!');
      db.close();
    });
  } finally {
    await client.close();
  }
};

run().catch(console.dir);
module.exports = client;
