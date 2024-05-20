import { useAppContext } from '../context/context';
import { useModalContext } from '../context/modalContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getErrorMessage } from '../utils/errorUtils';

export default function useGetUserToken() {
	const { dispatch } = useAppContext();

	const { setOpenToast, message, setMessage } = useModalContext();

	const navigate = useNavigate();

	const getUserToken = async (data) => {
		try {
			dispatch({ type: 'isLoading', payload: true });

			const response = await axios.post('/login', data);
			const { user, token } = response.data;
			console.log('GET USER TOKEN:', user, token);

			dispatch({ type: 'isLoading', payload: false });

			dispatch({
				type: 'user/MongoLoggedIn',
				payload: {
					user: user,
					token: token,
				},
			});

			localStorage.setItem('authToken', token);
			navigate('/overview');
			setMessage('Welcome Back!');
			setOpenToast(true, { message: message });
			dispatch({ type: 'user/addToken', payload: token });
			console.log('getUserToken:', token);
		} catch (error) {
			dispatch({ type: 'isLoading', payload: false });
			console.log(error);

			const errorMessage = getErrorMessage(error);
			setMessage(errorMessage);
			setOpenToast(true, { message: errorMessage });
		}
	};

	return { getUserToken };
}
