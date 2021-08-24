const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { MONGO_DB, PORT } = require('./config');
const router = require('./routes/index');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());

mongoose.connect(MONGO_DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(router);
app.use(errors());
app.use(error);

app.listen(PORT);
