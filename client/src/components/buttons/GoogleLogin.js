import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';
import axios from 'axios';
import google from '../../assets/google.png';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/context';

function GoogleLoginButton() {
	const { dispatch } = useAppContext();
	const navigate = useNavigate();

	const handleClick = useGoogleLogin({
		onSuccess: async ({ code }) => {
			const tokens = await axios.post('http://localhost:5000/google/auth', {
				code,
			});

			const { token } = tokens.data;

			localStorage.setItem('authToken', token);
			navigate('/overview');
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
			onClick={() => {
				dispatch({ type: 'isLoading', payload: true });
				handleClick();
			}}
			startIcon={
				<img
					src={google}
					alt="google button"
					style={{
						width: '100%',
						margin: 'auto',
					}} //
					sx={{ m: 0, p: 0 }}
				/>
			}
		></Button>
	);
}

export default GoogleLoginButton;
