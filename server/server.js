const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const cors = require('cors');
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const session = require('express-session');

const todoRouter = require('./src/routes/todoRoutes');
const authRouter = require('./src/routes/authRoutes');
const config = require('./db');
const port = process.env.PORT || 4000;

app.use(passport.initialize());
require('./src/config/passport')(passport);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'todo' }));

mongoose.connect(config.DB, { useNewUrlParser: true })
  .then(() => {
    console.log('Database is connected');
  }, err => {
    console.log('Can not connect to the database' + err);
  });

app.use('/api/todos', todoRouter);
app.use('/api/auth', authRouter);

app.listen(port, function () {
  console.log('Server is running on Port: ' + port);
});
