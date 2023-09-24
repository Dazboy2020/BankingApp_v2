const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');

const { getPrivateData } = require('../controllers/private');
const { getPrivateData2 } = require('../controllers/private');

router.route('/private1').get(protect, getPrivateData);
router.route('/private2').get(getPrivateData2);

module.exports = router;
