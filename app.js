const express = require('express');
const morgan = require('morgan');

// Router Imports
const authRouter = require('./routes/authRouter');
const userRouter = require('./routes/userRouter');

// Middleware Imports
const { verifyToken } = require('./middlewares/verifyToken');

// Initialize express app
const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', authRouter);
app.use('/api/user', verifyToken, userRouter);

module.exports = app;
