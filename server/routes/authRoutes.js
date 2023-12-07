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

// const oAuth2Client = new OAuth2Client(
// 	process.env.CLIENT_ID,
// 	process.env.CLIENT_SECRET,
// 	'postmessage'
// );

// app.post('/auth/google', async (req, res) => {
// 	const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
// 	console.log(tokens);

// 	res.json(tokens);
// });

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

module.exports = router;
