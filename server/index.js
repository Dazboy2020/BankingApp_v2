const express = require('express');
const dotenv = require('dotenv').config();

const cors = require('cors');

const app = express();

app.use('/', require('./routes/authRoutes'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Serving is running on ${PORT}`));
