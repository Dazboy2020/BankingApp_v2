const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

//!DB connection
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB Connected'))
	.catch((err) =>
		console.log(`MongoDB connected: ${conn.connection.host}`, err)
	);

//! Middleware
app.use(express.json());

app.use('/', require('./routes/authRoutes'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Serving is Stringrunning on ${PORT}`));