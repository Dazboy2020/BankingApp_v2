const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const { googleAuth } = require('../controllers/googleAuth');

const {
	test,
	registerUser,
	loginUser,
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

router
	.get('/', test)
	.post('/google/auth', googleAuth)
	.post('/register', registerUser)
	.post('/login', loginUser)
	.post('/forgotpassword', forgotPassword)
	.put('/resetpassword/:resetToken', resetPassword);

module.exports = router;
