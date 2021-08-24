require('dotenv').config();

const { JWT_SECRET = 'JWT_SECRET', MONGO_DB = 'mongodb://localhost:27017/moviesdb' } = process.env;

module.exports = { JWT_SECRET, MONGO_DB };
