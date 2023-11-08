const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const config = require('./config');
const usersRouter = require('./routes/users');
const foodRouter = require('./routes/foodRoute');
const workoutRouter = require('./routes/workoutsRoute');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/routes', usersRouter);
app.use('/routes', foodRouter);
app.use('/routes', workoutRouter);

dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

app.listen(config.PORT, () => {
  console.log('Server started on Port ' + config.PORT);
});

module.exports = app;
