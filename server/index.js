const dotenv = require('dotenv').config();
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const morgan = require('morgan');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const cors = require('cors');
const path = require('path');
const colors = require('colors');

const app = express();

//!DB connection
connectDB();

app.use(express.static(path.join(__dirname, 'public')));

const userRoutes = require('./routes/userRoutes');
const depositRoutes = require('./routes/depositRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const getUserData = require('./routes/getUserData');

//! Middleware
app.use(express.json());

//! Sanitize data
app.use(mongoSanitize());

//! Data sanitization against XSS
app.use(xss());

//! Set security headers
app.use(helmet());

//! Prevent parameter pollution
app.use(hpp());

//! Rate limit
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutes
	max: 100,
});
app.use(limiter);

//! Dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(
	cors({
		credentials: true,
		origin: [
			'http://localhost:3000',
			'https://expensify-frontend.onrender.com',
		],
	})
);

//* Mount routes
app.use('/', userRoutes);
app.use('/', expenseRoutes);
app.use('/', depositRoutes);
app.use('/', getUserData);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
	console.log(`Serving is running on ${PORT}`.bgMagenta.bold)
);

process.on('unhandledRejection', () => (error, promise) => {
	console.log(`Logged Error: ${error}`.red.bold);
	server.close(() => process.exit(1));
});
