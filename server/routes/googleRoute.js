const express = require('express');
const router = express.Router();
const cors = require('cors');
const googleAuth = require('../controllers/googleAuth');

router.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000', 'http://localhost:5000'],
	})
);

router.post('/google/auth', googleAuth); // Use POST method for google/auth endpoint

module.exports = router;
