const express = require('express');
const router = express.Router();
const cors = require('cors');
const app = express();

const {
	test,
	registerUser,
	loginUser,
	addExpense,
	addDeposit,
	deleteDeposit,
	deleteExpense,
} = require('../controllers/routeControllers');

//! middleware
app.use(
	cors({
		credentials: true,
		origin: 'http://localhost:3000',
	})
);

router.get('/', test);

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/addexpense', addExpense);

router.post('/adddeposit', addDeposit);

router.delete('/deletedeposit/:userId/:depositId', deleteDeposit);

router.delete('/deleteexpense/:userId/:expenseId', deleteExpense);

module.exports = router;
