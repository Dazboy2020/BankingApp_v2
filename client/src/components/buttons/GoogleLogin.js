import { useGoogleLogin } from '@react-oauth/google';
import { Button } from '@mui/material';
import axios from 'axios';
import google from '../../assets/google.png';
import { useNavigate } from 'react-router-dom';
// import { useAppContext } from '../../context/context';

function GoogleLoginButton({ width, height, padding }) {
	//! TODO: ERROR HANDLING
	// const { dispatch } = useAppContext();
	const navigate = useNavigate();

	const handleClick = useGoogleLogin({
		onSuccess: async ({ code }) => {
			const tokens = await axios.post('http://localhost:5000/google/auth', {
				code,
			});

			const { token } = tokens.data;

			localStorage.setItem('authToken', token);
			// dispatch({ type: 'isLoading', payload: false });

			navigate('/overview');
		},

		flow: 'auth-code',
	});

	return (
		<Button
			sx={{
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
				p: padding,
				width: width,
				height: height,
				backgroundColor: 'transparent',
			}}
			onClick={() => {
				// dispatch({ type: 'isLoading', payload: true });
				handleClick();
			}}
			startIcon={
				<img
					src={google}
					alt="google button"
					style={{
						width: '100%',
						height: '100%',
						// border: '1px solid grey',
						padding: 0,
						'&:hover': {
							backgroundColor: 'transparent',
							cursor: 'pointer',
						},
					}}
					sx={{ m: 0, p: 0 }}
				/>
			}
		></Button>
	);
}

export default GoogleLoginButton;
