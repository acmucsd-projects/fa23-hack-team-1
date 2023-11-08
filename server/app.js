const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//defines routes
// const usersRouter = require('./routes/users');
// const notesRouter = require('./routes/notes');
const foodItemsRoute = require('./routes/foodItems');


//creates app variable
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//webpage address and app path
// app.use('/users', usersRouter);
// app.use('/notes', notesRouter);
app.use('/foodItems', foodItemsRoute);

dotenv.config();

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
