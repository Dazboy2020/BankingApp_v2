import { useAppContext } from '../../context/context';
import { useGoogleLogin } from '@react-oauth/google';
import { useModalContext } from '../../context/modalContext';
import { Button } from '@mui/material';
import { getErrorMessage } from '../../utils/errorUtils';
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
	const { dispatch } = useAppContext();
	const { setOpenToast, setMessage } = useModalContext();

	const handleGoogle = useGoogleLogin({
		onSuccess: async ({ code }) => {
			try {
				const tokens = await axios.post('http://localhost:5000/google/auth', {
					code,
				});

				if (!tokens) return;

				const { token, user } = tokens.data;

				console.log(user);

				localStorage.setItem('authToken', token);
				dispatch({ type: 'user/addToken', payload: token });
				dispatch({ type: 'isLoading', payload: false });
				dispatch({
					type: 'user/MongoLoggedIn',
					payload: {
						user,
						token,
					},
				});
			} catch (error) {
				console.error(error);
				const errorMessage = getErrorMessage(error);
				setMessage(errorMessage);
				setOpenToast(true, { message: errorMessage });
				dispatch({ type: 'isLoading', payload: false });
			}
		},
		onError: (error) => {
			console.error(error);
			const errorMessage = getErrorMessage(error);
			setMessage(errorMessage);
			setOpenToast(true, { message: errorMessage });
			dispatch({ type: 'isLoading', payload: false });
		},

		onCancel: (error) => {
			console.error(error);

			dispatch({ type: 'isLoading', payload: false });
			const errorMessage = getErrorMessage(error);
			setMessage(errorMessage);
			setOpenToast(true, { message: errorMessage });
		},

		onNonOAuthError: (error) => {
			console.error(error.message);
			dispatch({ type: 'isLoading', payload: false });
			const errorMessage = getErrorMessage(error);
			setMessage(errorMessage);
			setOpenToast(true, { message: errorMessage });
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
						width: '14rem',
						height: '5rem',
						objectFit: 'contain',

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
