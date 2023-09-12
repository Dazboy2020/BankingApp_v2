const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//!DB connection
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => console.log('DB Connected'))
	.catch((err) => console.log('MongoDB connected: ', err));

app.use(express.static(path.join(__dirname, 'public')));

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

app.use('/', require('./routes/authRoutes'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Serving is Stringrunning on ${PORT}`));
