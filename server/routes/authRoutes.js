const express = require('express');
const router = express.Router();
const cors = require('cors');

const {
	test,
	registerUser,
	loginUser,
	addExpense: addexpense,
	addDeposit,
} = require('../controllers/routeControllers');

//! middleware
router.use(
	cors({
		credentials: true,
		origin: 'http://localhost:3000',
	})
);

router.get('/', test);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/addexpense', addexpense);

router.post('/adddeposit', addDeposit);

module.exports = router;
