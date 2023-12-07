require('dotenv').config();
const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();

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

		res.json(userInfo);
	} catch (error) {
		console.log(error);
	}
};
