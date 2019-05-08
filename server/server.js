const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');

const todoRouter = require('./routes/todoRoutes');
const config = require('./db');
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(config.DB, { useNewUrlParser: true })
  .then(() => {
    console.log('Database is connected');
  }, err => {
    console.log('Can not connect to the database' + err);
  }
  );

app.use('/api/todos', todoRouter);

app.listen(port, function () {
  console.log('Server is running on Port: ' + port);
});
