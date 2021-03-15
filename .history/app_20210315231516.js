const express = require('express');
const morgan = require('morgan');

// Router Imports
const authRouter = require('./routes/authRouter');

// Initialize express app
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', authRouter);

module.exports = app;
