require('dotenv').config();

const { JWT_SECRET = 'JWT_SECRET', MONGO_DB = 'mongodb://localhost:27017/moviesdb', PORT = 3000 } = process.env;

module.exports = { JWT_SECRET, MONGO_DB, PORT };
