import { useAppContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';
import axios from 'axios';

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

function GoogleLoginButton({ width, height, padding, image }) {
	const navigate = useNavigate();
	const { dispatch } = useAppContext();

	const handleGoogle = useGoogleLogin({
		onSuccess: async ({ code }) => {
			try {
				const tokens = await axios.post('http://localhost:5000/google/auth', {
					code,
				});

				if (!tokens) return;

				const { token } = tokens.data;

				localStorage.setItem('authToken', token);
				dispatch({ type: 'user/addToken', payload: token });
				dispatch({ type: 'isLoading', payload: false });

				navigate('/overview');
			} catch (error) {
				console.error(error);
			}
		},
		onError: (error) => {
			console.error(error);
			dispatch({ type: 'isLoading', payload: false });
		},

		onCancel: (error) => {
			console.error(error);
			dispatch({ type: 'isLoading', payload: false });
		},

		onNonOAuthError: (error) => {
			console.error(error.message);
			dispatch({ type: 'isLoading', payload: false });
		},
		flow: 'auth-code',
	});

	const handleClick = () => {
		dispatch({ type: 'isLoading', payload: true });
		handleGoogle();
	};

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
					src={image}
					alt="google button"
					style={{
						width: '100%',
						height: '100%',
						padding: 0,
						'&:hover': {
							backgroundColor: 'transparent',
							cursor: 'pointer',
						},
						borderRadius: 4,
					}}
					sx={{ m: 0, p: 0 }}
				/>
			}
		></Button>
	);
}

export default GoogleLoginButton;
