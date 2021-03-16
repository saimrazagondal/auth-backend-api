require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose');

// Router Imports
const authRouter = require('./routes/authRouter');
const DB_URI = (process.env.mongoConnectionString);
mongoose
    .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log('MongoDb Connection successful'))
    .catch((err) => {
        console.log('Failed to connect to MongoDB...', err);
        process.exit();
    });

// Initialize express app
const app = express();
app.use(cors())

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', authRouter);

module.exports = app;
