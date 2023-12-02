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
	editExpense,
	editDeposit,
	forgotPassword,
	resetPassword,
	getUser,
} = require('../controllers/routeControllers');
const { protect } = require('../middleware/auth');

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

router.post('/forgotpassword', forgotPassword);

router.put('/resetpassword/:resetToken', resetPassword);

router.use(protect);

router.post('/addexpense', addExpense);

router.post('/add-deposit', addDeposit);

router.delete('/deletedeposit/:userId/:depositId', deleteDeposit);

router.delete('/deleteexpense/:userId/:expenseId', deleteExpense);

router.put('/editexpense/:userId/:expenseId', editExpense);

router.put('/editdeposit/:userId/:depositId', editDeposit);

module.exports = router;
