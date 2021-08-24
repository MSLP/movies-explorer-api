const express = require('express');
const mongoose = require('mongoose');
const { MONGO_DB, PORT } = require('./config');
const router = require('./routes/index');

const app = express();

app.use(express.json());

mongoose.connect(MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(router);

app.listen(PORT);
