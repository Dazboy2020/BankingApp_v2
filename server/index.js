const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

//!DB connection
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('DB Connected'))
	.catch((err) => console.log('MongoDB connected: ', err));

app.use(express.static(path.join(__dirname, 'public')));

//! Middleware
app.use(express.json());

app.use('/', require('./routes/authRoutes'));

router.use(
	cors({
		// origin: 'http://localhost:3000',
		origin: ['https://expensify-frontend.onrender.com/'],
		credentials: true,
	})
);
app.options('*', cors());

const PORT = 5000;

app.listen(PORT, () => console.log(`Serving is Stringrunning on ${PORT}`));
