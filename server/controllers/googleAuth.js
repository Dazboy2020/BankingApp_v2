require('dotenv').config();
const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/user');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const sendToken = require('../controllers/routeControllers');

app.use(cors());
app.use(express.json());

const oAuth2Client = new OAuth2Client(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	'postmessage'
);

exports.googleAuth = async (req, res, next) => {
	try {
		const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
		const userInfo = jwt.decode(tokens.id_token);

		const existingUser = await User.findOne({ email: userInfo.email });

		if (existingUser) {
			const token = existingUser.getSignedToken();

			// console.log(`existingUser: ${existingUser}`);
			console.log(`token: ${token}`);

			return res.status(201).json({ success: true, user: existingUser, token });
		} else {
			// Create a new user with Google OAuth and null password
			const newUser = new User({
				username: userInfo.name,
				email: userInfo.email,
				password: null,
				confirmPassword: null,
			});

			await newUser.save();

			// Generate a token for the new user
			const token = newUser.getSignedToken();

			// Return the new user along with the token
			return res.status(201).json({ success: true, user: newUser, token });
		}
	} catch (error) {
		console.log(error);
	}
};
