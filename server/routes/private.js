const express = require('express');
const router = express.Router();
const cors = require('cors');

const { protect } = require('../middleware/auth');

const { getPrivateData } = require('../controllers/private');
const { getPrivateData2 } = require('../controllers/private');
const { getUserData } = require('../controllers/private');

//! middleware
router.use(
	cors({
		credentials: true,
		origin: 'http://localhost:3000',
	})
);

router.route('/private1').get(protect, getPrivateData);
router.route('/private2').get(protect, getPrivateData2);
router.route('/userdata').get(protect, getUserData);

module.exports = router;
