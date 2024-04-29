const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');
const cors = require('cors');
const path = require('path');
const colors = require('colors');

const app = express();

//!DB connection
connectDB();

app.use(express.static(path.join(__dirname, 'public')));

const authRoutes = require('./routes/authRoutes');
const getUserData = require('./routes/getUserData');

//! Middleware
app.use(express.json());

app.use(
	cors({
		credentials: true,
		origin: [
			'http://localhost:3000',
			'https://expensify-frontend.onrender.com',
		],
	})
);

app.use('/', authRoutes);
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
