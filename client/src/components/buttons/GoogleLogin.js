import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';
import axios from 'axios';

function GoogleLoginButton() {
	const handleClick = useGoogleLogin({
		onSuccess: async (tokenResponse) => {
			const userInfo = await axios.get('http://localhost:5000/google/auth', {
				headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
			});
			console.log(userInfo);
			// console.log(tokenResponse);
			// // fetching userinfo can be done on the client or the server
			// const userInfo = await axios
			// 	.get('https://www.googleapis.com/oauth2/v3/userinfo', {
			// 		headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
			// 	})
			// 	.then((res) => res.data);

			// console.log(userInfo);
		},

		// onSuccess: async (codeResponse) => {
		// try {
		// 	const code = codeResponse.code;
		// 	const response = await axios.post('http://localhost:5000/google/auth', {
		// 		code: code, // Send 'code' in the request body
		// 	});
		// 	console.log(response);
		// } catch (error) {
		// 	console.error('Error sending ping:', error);
		// }
		// console.log(codeResponse);
		// },
		// onError: () => {
		// 	console.error('Google login failed');
		// },
		// flow: 'auth-code',
	});

	return (
		<Button
			sx={{
				fontSize: { xs: '1rem', sm: '1.3rem' },
				border: '1px solid grey',
				width: '100%',
				p: 1,
			}}
			onClick={() => handleClick()}
		>
			Google sign in 🚀
		</Button>
	);
}

export default GoogleLoginButton;
