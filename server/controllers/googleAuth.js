require('dotenv').config();
const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const oAuth2Client = new OAuth2Client(
	process.env.CLIENT_ID,
	process.env.CLIENT_SECRET,
	'postmessage'
);

exports.googleAuth = async (req, res, next) => {
	console.log(req.body.code);
	try {
		const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
		console.log(tokens);

		res.json(tokens);
	} catch (error) {
		console.error(error);
		console.log(error);
	}
	// try {
	// 	const token = req.headers.authorization.replace('Bearer ', '');
	// 	const response = await axios.get(
	// 		'https://www.googleapis.com/oauth2/v3/userinfo',
	// 		{
	// 			headers: { Authorization: `Bearer ${token}` },
	// 		}
	// 	);
	// 	res.json(response.data);
	// } catch (error) {
	// 	res.status(500).json({ error: 'Internal Server Error' });
	// }
};
