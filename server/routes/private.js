const express = require('express');
const router = express.Router();
const cors = require('cors');

const { protect } = require('../middleware/auth');

const { getUserProtectedRoute } = require('../controllers/private');

//! middleware
router.use(
	cors({
		credentials: true,
		origin: 'http://localhost:3000',
	})
);

router.route('/userdata').get(protect, getUserProtectedRoute);

module.exports = router;
