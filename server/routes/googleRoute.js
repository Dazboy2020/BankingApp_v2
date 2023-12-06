const express = require('express');
const router = express.Router();
const cors = require('cors');
const googleAuth = require('../controllers/googleAuth');

//! middleware
router.use(
	cors({
		credentials: true,
		origin: 'http://localhost:3000',
	})
);

router.route('/google/auth').get(googleAuth);

module.exports = router;
