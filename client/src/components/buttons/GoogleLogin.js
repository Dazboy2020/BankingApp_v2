import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';
import axios from 'axios';

function GoogleLoginButton() {
	const handleClick = useGoogleLogin({
		onSuccess: async ({ code }) => {
			const tokens = await axios.post('http://localhost:5000/google/auth', {
				code,
			});

			console.log(tokens);
		},
		flow: 'auth-code',
		// onSuccess: async (tokenResponse) => {
		// 	const userInfo = await axios.get('http://localhost:5000/google/auth', {
		// 		headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
		// 	});
		// 	console.log(userInfo);

		// },
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
