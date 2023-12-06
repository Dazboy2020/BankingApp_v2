import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';
import axios from 'axios';

function GoogleLoginButton() {
	const googleLogin = useGoogleLogin({
		onSuccess: async (codeResponse) => {
			try {
				const code = codeResponse.code;
				const response = await axios.get('http://localhost:5000/google/auth', {
					params: {
						code: code, // Send 'code' as a query parameter
					},
				}); // Replace with your backend URL
				console.log(response); // Log the response from the backend
			} catch (error) {
				console.error('Error sending ping:', error);
			}
		},
		onError: () => {
			console.error('Google login failed');
		},
		flow: 'auth-code',
	});

	return (
		<Button
			sx={{
				fontSize: { xs: '1rem', sm: '1.3rem' },
				border: '1px solid grey',
				width: '100%',
				p: 1,
			}}
			onClick={() => googleLogin()}
		>
			Google sign in 🚀
		</Button>
	);
}

export default GoogleLoginButton;
