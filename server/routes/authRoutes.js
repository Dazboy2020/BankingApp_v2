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

router
	.get('/', test)
	.post('/google/auth', googleAuth)
	.post('/register', registerUser)
	.post('/login', loginUser)
	.post('/forgotpassword', forgotPassword)
	.put('/resetpassword/:resetToken', resetPassword)
	.use(protect)
	.post('/addexpense', addExpense)
	.post('/add-deposit', addDeposit)
	.delete('/deletedeposit/:userId/:depositId', deleteDeposit)
	.delete('/deleteexpense/:userId/:expenseId', deleteExpense)
	.put('/editexpense/:userId/:expenseId', editExpense)
	.put('/editdeposit/:userId/:depositId', editDeposit)
	.put('/edit-budget/:userId/', editBudget);

module.exports = router;
