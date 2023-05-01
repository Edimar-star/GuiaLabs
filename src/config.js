const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_USER: process.env.DB_USER || 'Edilberto',
  DB_PASSWORD: process.env.DB_PASSWORD || 'NNzb0N4PqMlkVte3',
  DB_HOST: process.env.DB_HOST || 'cluster0.ru7drgq.mongodb.net',
  DB_DATABASE: process.env.DB_DATABASE || 'favoriteProducts',
};
