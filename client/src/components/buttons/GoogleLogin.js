import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';
import axios from 'axios';
import google from '../../assets/google.png';

function GoogleLoginButton() {
	const handleClick = useGoogleLogin({
		onSuccess: async ({ code }) => {
			const tokens = await axios.post('http://localhost:5000/google/auth', {
				code,
			});

			console.log(tokens);
		},

		flow: 'auth-code',
	});

	return (
		<Button
			sx={{
				fontSize: { xs: '1rem', sm: '1.3rem' },
				width: '100%',
				margin: 'auto',
				'& .MuiButton-startIcon': {
					m: 0,
					p: 0,
				},
			}}
			onClick={() => handleClick()}
			startIcon={
				<img
					src={google}
					alt="google button"
					style={{
						width: '100%',
						margin: 'auto',
					}} //
					sx={{ m: 0 }}
				/>
			}
		>
			{/* Google sign in 🚀 */}
		</Button>
	);
}

export default GoogleLoginButton;
