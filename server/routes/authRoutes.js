const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const { OAuth2Client } = require('google-auth-library');

const { protect } = require('../middleware/auth');
const { googleAuth } = require('../controllers/googleAuth');

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
	editBudget,
} = require('../controllers/routeControllers');

const app = express();

router.use(bodyParser.json());

//! middleware
app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000'],
	})
);

router.get('/', test);

router.post('/google/auth', googleAuth);

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

router.put('/edit-budget/:userId/', editBudget);

module.exports = router;
