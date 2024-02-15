import { useLocation, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';
import axios from 'axios';
import google from '../../assets/google.png';

const buttonStyles = {
	margin: 0,
	'& .MuiButton-startIcon': {
		m: 0,
		p: 0,
	},
	'& .MuiButtonBase-root': {
		p: 0,
	},
	'&:hover': {
		backgroundColor: 'transparent',
		cursor: 'pointer',
	},
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'transparent',
};

function GoogleLoginButton({ width, height, padding }) {
	const navigate = useNavigate();

	const location = useLocation();

	const shouldApplyBorder = location.pathname === '/login';

	const borderStyle = shouldApplyBorder ? '1px solid grey' : 'none';

	const handleClick = useGoogleLogin({
		onSuccess: async ({ code }) => {
			try {
				const tokens = await axios.post('http://localhost:5000/google/auth', {
					code,
				});

				const { token } = tokens.data;

				localStorage.setItem('authToken', token);

				navigate('/overview');
			} catch (error) {
				console.error(error);
			}
		},
		onError: (error) => {
			console.error(error);
		},

		onCancel: (error) => {
			console.error(error);
		},
		flow: 'auth-code',
	});

	return (
		<Button
			sx={{
				...buttonStyles,
				p: padding,
				width: width,
				height: height,
			}}
			onClick={() => {
				handleClick();
			}}
			startIcon={
				<img
					src={google}
					alt="google button"
					style={{
						width: '100%',
						height: '100%',
						padding: 0,
						'&:hover': {
							backgroundColor: 'transparent',
							cursor: 'pointer',
						},
						border: borderStyle,
						borderRadius: 4,
					}}
					sx={{ m: 0, p: 0 }}
				/>
			}
		></Button>
	);
}

export default GoogleLoginButton;
