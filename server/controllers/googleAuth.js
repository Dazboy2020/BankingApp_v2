const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const qs = require('qs');

exports.googleAuth = async (req, res, next) => {
	try {
		const token = req.headers.authorization.replace('Bearer ', '');
		const response = await axios.get(
			'https://www.googleapis.com/oauth2/v3/userinfo',
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		);
		res.json(response.data);
	} catch (error) {
		res.status(500).json({ error: 'Internal Server Error' });
	}
	// try {
	// 	const { code } = req.body;

	// 	// Exchange the received code for an access token using Google's token endpoint
	// 	const tokenEndpoint = 'https://oauth2.googleapis.com/token';
	// 	const clientID = process.env.CLIENT_ID; // Replace with your Google Client ID
	// 	const clientSecret = process.env.CLIENT_SECRET; // Replace with your Google Client Secret
	// 	const redirectURI = 'http://localhost:5000/google/auth'; // Replace with your redirect URI

	// 	const tokenResponse = await axios.post(tokenEndpoint, null, {
	// 		params: {
	// 			code,
	// 			client_id: clientID,
	// 			client_secret: clientSecret,
	// 			redirect_uri: redirectURI,
	// 			grant_type: 'authorization_code',
	// 		},
	// 	});

	// 	const accessToken = tokenResponse.data.access_token;
	// 	// You can use the access token here or send it back to the frontend as needed
	// 	res.status(200).json({ success: true, accessToken });
	// } catch (error) {
	// 	console.error('Error:', error);
	// 	res.status(500).json({ success: false, error: 'Internal Server Error' });
	// }
	// return res.status(200).json({
	// 	success: true,
	// 	data: code,
	// });
};
