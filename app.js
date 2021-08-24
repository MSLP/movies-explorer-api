const express = require('express');
const mongoose = require('mongoose');
const { MONGO_DB, PORT } = require('./config');

const app = express();

app.use(express.json());

mongoose.connect(MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT);
